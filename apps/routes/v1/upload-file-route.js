"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileRoutes = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = __importDefault(require("express"));
const fresh_1 = require("../../middlewares/fresh");
const fresh_2 = require("../../controllers/fresh");
const uploadFileRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1', router);
    router.post('/fresh', fresh_1.freshUploadMidleWare.single('file'), async (req, res) => await (0, fresh_2.freshUploadFile)(req, res));
};
exports.uploadFileRoutes = uploadFileRoutes;
