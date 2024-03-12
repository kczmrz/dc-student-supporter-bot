"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageForUser = void 0;
class MessageForUser {
    constructor(initialValue) {
        this.value = initialValue;
    }
    Create() {
        for (let i = 0; i < 10; i++) {
            console.log("test");
        }
    }
}
exports.MessageForUser = MessageForUser;
