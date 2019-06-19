export default class RandUtil {

    /**
     * [0, max) 区間で n 個の乱数を生成する。
     * 重複無し。
     * n > max の場合、重複無しで作成できないので、空の配列を返す。
     * @param max
     * @param n
     */
    public static  create_rand = (max: number, n: number): number[] => {
        if (n > max) {
            return []
        }
        const rands: number[] = []
        for (let i = 0; i < 10000; i++) {
            const rand = Math.floor(Math.random() * 100) % max
            if (rands.indexOf(rand) !== -1) {
                continue
            }
            rands.push(rand)
            if (rands.length === n) {
                break
            }
        }
        return rands
    }

}
