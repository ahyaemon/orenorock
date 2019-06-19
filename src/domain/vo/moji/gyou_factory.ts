import Gyou from "./gyou"
import { hm } from "./hiragana"

export default class GyouFactory {

    public static default(): Gyou[] {
        return [
            {hiraganas: [hm.aa, hm.ai, hm.au, hm.ae, hm.ao]},
            {hiraganas: [hm.ka, hm.ki, hm.ku, hm.ke, hm.ko]},
            {hiraganas: [hm.sa, hm.si, hm.su, hm.se, hm.so]},
            {hiraganas: [hm.ta, hm.ti, hm.tu, hm.te, hm.to]},
            {hiraganas: [hm.na, hm.ni, hm.nu, hm.ne, hm.no]},
            {hiraganas: [hm.ha, hm.hi, hm.hu, hm.he, hm.ho]},
            {hiraganas: [hm.ma, hm.mi, hm.mu, hm.me, hm.mo]},
            {hiraganas: [hm.ya, hm.yu, hm.yo]},
            {hiraganas: [hm.ra, hm.ri, hm.ru, hm.re, hm.ro]},
            {hiraganas: [hm.wa]},
        ]
    }

}
