import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "MovingPet";
    res.locals.routes = routes;
    next();
};