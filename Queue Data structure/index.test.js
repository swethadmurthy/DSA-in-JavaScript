const { createQueue } = require(".")

describe('Queue', () => {
    let queue
    beforeEach(() => {
        queue = createQueue()
    })

    test('length', () => {
        expect(queue.length).toEqual(0)

        queue.enqueue(1)
        expect(queue.length).toEqual(1)
    })

    test('isEmpty', () => {
        expect(queue.isEmpty()).toEqual(true)

        queue.enqueue(1)
        expect(queue.isEmpty()).toEqual(false)

        queue.dequeue()
        expect(queue.isEmpty()).toEqual(true)
    })

    
})