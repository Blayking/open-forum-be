import { Router } from 'express';

const userController = Router();

userController.get('/:id', (req, res, next) => {
    const userId = req.params.id;

    console.log(userId);

    res.status(200).send({ user: { name: 'Pirocas', age: '69', isImature: true, isAdmin: false } });
});


export { userController };