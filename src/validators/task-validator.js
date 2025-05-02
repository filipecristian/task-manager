function validateCreate(req, res, next) {
    const { title, description, status } = req.body;

    if (typeof title !== 'string') {
        return res.status(422).json({ error: '"title" must be a string' });
    }

    if (description && typeof description !== 'string') {
        return res.status(422).json({ error: '"description" must be a string if provided' });
    }

    if (status !== 'pending' && status !== 'done') {
        return res.status(422).json({ error: '"status" must be either "pending" or "done"' });
    }

    next();
}

module.exports = { validateCreate };