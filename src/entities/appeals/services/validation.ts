export function validateAppealInput(topic: string, description?: string): ResultObj<true> {
    if (!topic.trim()) {
        return createResultObj('error', 'Topic cannot be empty', 'forbidden');
    }
    if (topic.length > 255) {
        return createResultObj('error', 'Topic is too long', 'forbidden');
    }
    if (description && description.length > 1000) {
        return createResultObj('error', 'Description is too long', 'forbidden');
    }
    return createResultObj('ok', true);
}

export function validateResolution(text: string): ResultObj<true> {
    if (!text.trim()) {
        return createResultObj('error', 'Resolution text cannot be empty', 'forbidden');
    }
    if (text.length > 1000) {
        return createResultObj('error', 'Resolution text is too long', 'forbidden');
    }
    return createResultObj('ok', true);
} 