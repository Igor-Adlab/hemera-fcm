import {Pattern} from "nats-hemera";
import {INotification} from "./IActionSendTopic";

export interface IAction {
    matching: Pattern;
    act(params: INotification, cb: Function): any
}
