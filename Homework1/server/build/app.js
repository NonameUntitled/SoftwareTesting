"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const routes_1 = require("./routes");
const cors = require('cors');
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors());
app.use(express_1.default.static('public'));
routes_1.setupRoutes(app);
exports.default = app;
//# sourceMappingURL=app.js.map