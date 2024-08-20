class Points {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy)
    }
}

const p1 = new Points(5, 5)
const p2 = new Points(10, 10)

console.log(Points.distance(p1, p2))