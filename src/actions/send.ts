import {Sender} from "../Sender";
import {TOPIC_FCM} from '../constants';
import {INotification} from "../interfaces/IActionSendTopic";

export default (cmd: string, sender: Sender) => ({
    matching: {
        cmd,
        topic: TOPIC_FCM,
    },
    act(request: INotification, cb) {
        sender.send(cmd, request)
            .then(data => cb(null, data))
            .then(err => cb(err, null))
    }
});
