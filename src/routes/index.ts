import express, { Router } from 'express';
import { 
    createAppealCtrl, 
    takeAppealCtrl,
    completeAppealCtrl,
    cancelAppealCtrl,
    cancelAllAppealsCtrl,
    listAppealsCtrl, } from '@/controllers/index';

const router: Router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Resolution:
 *       type: object
 *       required:
 *         - id
 *         - appealId
 *         - text
 *       properties:
 *         id:
 *           type: string
 *         appealId:
 *           type: string
 *         text:
 *           type: string
 *     Cancellation:
 *       type: object
 *       required:
 *         - id
 *         - appealId
 *         - reason
 *       properties:
 *         id:
 *           type: string
 *         appealId:
 *           type: string
 *         reason:
 *           type: string
 *     AppealNew:
 *       type: object
 *       required:
 *         - id
 *         - topic
 *         - status
 *         - createdAt
 *       properties:
 *         id:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *           enum: [NEW]
 *         topic:
 *           type: string
 *         description:
 *           type: string
 *           nullable: true
 *     AppealTaken:
 *       type: object
 *       required:
 *         - id
 *         - topic
 *         - status
 *         - createdAt
 *       properties:
 *         id:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *           enum: [PENDING]
 *         topic:
 *           type: string
 *         description:
 *           type: string
 *           nullable: true
 *     AppealResolved:
 *       type: object
 *       required:
 *         - id
 *         - topic
 *         - status
 *         - createdAt
 *         - resolution
 *       properties:
 *         id:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *           enum: [RESOLVED]
 *         topic:
 *           type: string
 *         description:
 *           type: string
 *           nullable: true
 *         resolution:
 *           $ref: '#/components/schemas/Resolution'
 *           nullable: true
 *     AppealCanceled:
 *       type: object
 *       required:
 *         - id
 *         - topic
 *         - status
 *         - createdAt
 *       properties:
 *         id:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *           enum: [CANCELLED]
 *         topic:
 *           type: string
 *         description:
 *           type: string
 *           nullable: true
 *         cancellation:
 *           $ref: '#/components/schemas/Cancellation'
 *           nullable: true
 *     AppealList:
 *       type: array
 *       items:
 *         oneOf:
 *           - $ref: '#/components/schemas/AppealNew'
 *           - $ref: '#/components/schemas/AppealTaken'
 *           - $ref: '#/components/schemas/AppealResolved'
 *           - $ref: '#/components/schemas/AppealCanceled'
 *   responses:
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 */

/**
 * @swagger
 * /appeal/create:
 *   post:
 *     summary: Create a new appeal
 *     tags: [Appeals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - topic
 *             properties:
 *               topic:
 *                 type: string
 *                 description: The topic of the appeal
 *               description:
 *                 type: string
 *                 description: Optional detailed description of the appeal
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Appeal created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/AppealNew'
 *       400:
 *         description: Invalid request parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/Error'
 */
router.post('/create', createAppealCtrl);

/**
 * @swagger
 * /appeal/take:
 *   patch:
 *     summary: Take an appeal
 *     tags: [Appeals]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the appeal to take
 *     responses:
 *       200:
 *         description: Appeal taken successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/AppealTaken'
 *       400:
 *         description: Invalid request parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/Error'
 */
router.patch('/take', takeAppealCtrl);

/**
 * @swagger
 * /appeal/complete:
 *   patch:
 *     summary: Complete an appeal
 *     tags: [Appeals]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the appeal to complete
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - resolution
 *             properties:
 *               resolution:
 *                 type: string
 *                 description: Resolution details for the completed appeal
 *     responses:
 *       200:
 *         description: Appeal completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/AppealResolved'
 */
router.patch('/complete', completeAppealCtrl);

/**
 * @swagger
 * /appeal/cancel:
 *   patch:
 *     summary: Cancel an appeal
 *     tags: [Appeals]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the appeal to cancel
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason:
 *                 type: string
 *                 description: Reason for cancellation
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Appeal cancelled successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/AppealCanceled'
 */
router.patch('/cancel', cancelAppealCtrl);

/**
 * @swagger
 * /appeal/cancel/all:
 *   patch:
 *     summary: Cancel all appeals
 *     tags: [Appeals]
 *     responses:
 *       200:
 *         description: All appeals cancelled successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/AppealCanceled'
 */
router.patch('/cancel/all', cancelAllAppealsCtrl);

/**
 * @swagger
 * /appeal/list:
 *   get:
 *     summary: Get list of appeals
 *     tags: [Appeals]
 *     parameters:
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter appeals by specific date (YYYY-MM-DD)
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Start date for date range filter (YYYY-MM-DD)
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         description: End date for date range filter (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: List of appeals retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/AppealList'
 */
router.get('/list', listAppealsCtrl);

export default router;
