import { adaptMiddleware } from "../adapters/express-middleware-adapter";
import { makeAuthMiddleware } from "../factories";
export const authentication = adaptMiddleware(makeAuthMiddleware());
