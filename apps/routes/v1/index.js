"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouterV1 = void 0;
const controllers_1 = require("../../controllers");
const upload_file_route_1 = require("./upload-file-route");
const appRouterV1 = (app) => {
    app.get('/api/v1', async (req, res) => await (0, controllers_1.index)(req, res));
    (0, upload_file_route_1.uploadFileRoutes)(app);
};
exports.appRouterV1 = appRouterV1;
