import jwt from 'jsonwebtoken';

/*
*----------------------------------
*/

const userAuth = () => async (req, res, next) => {
    const token = req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : null;

    if (!token) return res.status(403).send({ statusText: 'UNAUTHORIZED', statusValue: 403, message: 'Unauthorized, No token provided.' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ statusText: 'UNAUTHORIZED', statusValue: 401, message: 'Failed to authenticate token.' });

        if (decoded.id.length !== 24) {
            return res.status(401).json({ statusText: 'UNAUTHORIZED', statusValue: 401, message: 'Failed to authenticate token' });
        }
        req.decoded = decoded;

        next();
    });
};

export default userAuth;
