var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { userList } from '../data/userData.js';
let getUserController;
getUserController = (req, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('getUserController runs');
    // we have also texted that "axios" (when used in web client) will config the CURRENT "HOST URL" AUTOMATICALLY (so you do not need to manually config to "localhost:5000")
    console.log(`request base url: ${req.protocol}, ${req.get('host')} ${req.baseUrl}`);
    response.status(200).json(userList);
});
export default getUserController;
