import { prisma } from "@/lib/db";
import { Appeal, AppealCanceled, AppealCreated, AppealEntity } from "../domain";


async function createAppeal(topic:string, description = undefined): Promise<AppealCreated> {
    const createdAppeal = await prisma.appeal.create({
        data: {
            status: "NEW",
            topic,

        }
    })

    return createdAppeal as AppealCreated
}

async function findAppeals(datesQuery?: [Date] | [Date, Date]) {
    console.log(datesQuery)
    const where = datesQuery ? 
        {createdAt: {
            gte: datesQuery[0],
            lte: datesQuery[1] || datesQuery[0]
        }} :
        {}

    return prisma.appeal.findMany({ where, include: {
        resolution: true,
        cancellation: true
    }})
}

const updateAppealStatus = {
    createResultObj: (type: "ok" | "error") => ({type}),

    findAppeal: (id:string) => prisma.appeal.findFirst({where:{id}}),

    takeOnWork: async function(id: string) {
        try {
            const appeal = await this.findAppeal(id)
            if (!appeal) throw new Error()

            prisma.appeal.update({data: {status: "PENDING"},where: {id}})

            return this.createResultObj('ok')
        } catch (error) {
            return this.createResultObj('error')
        }
    },

    makeItDone: async function (id: string, text?: string) {
        try {
            const appeal = await this.findAppeal(id)
            if (!appeal) throw new Error()

            await prisma.$transaction([
                prisma.appeal.update({
                    where: { id },
                    data: { status: "RESOLVED" }
                }),
                prisma.appealResolution.create({
                    data: { text: text || '', appealId: id } 
                })
            ]);

            return this.createResultObj('ok')
        } catch (error) {
            return this.createResultObj('error')
        }
    }
}

export {createAppeal, findAppeals, updateAppealStatus}