import {Sender} from "../Sender";
import {TOPIC_FCM, CMD_SUBSCRIBE} from '../constants';
import {ISubscribeRequest} from "../interfaces/IActionSendTopic";

export default (cmd: string, sender: Sender) => ({
    matching: {
        cmd: CMD_SUBSCRIBE,
        topic: TOPIC_FCM,
    },
    act(request: ISubscribeRequest, cb) {
        sender.subscribe(request.client, request.topic)
            .then(data => cb(null, data))
            .then(err => cb(err, null))
    }
});
