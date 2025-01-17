//Queue is a collection of items that obeys the principle of First In First Out (FIFO).
// The item that is added first is the one that is removed first. And also when when we place an item into a queue, we can only get it out after all other items that have been added before it have been removed.
// Creating a Factory Function for Queues
function createQueue(){
   // using an array-held enclosure. This is because arrays have built-in methods that make it easy to implement the queue data structure.
   
   const queue = []
    return {
        //add items to the front of our array for enqueue with the array unshift method. 
        enqueue(x) {
            queue.unshift(x)
        },
        //dequeue method using array.pop to remove the final item from the array
        //This ensures we maintain order in our queue
        dequeue() {
            if (queue.length === 0) {
                return undefined
            }
            return queue.pop()
        },
        //peek method that will return the item that's next to be removed
        peek() {
            if (queue.length === 0) {
                return undefined
            }
            return queue[queue.length -1]
        },
        get length() {
            return queue.length
        },
        isEmpty() {
            return queue.length === 0
        },
        print() {
            for (const key in queue){
                console.log(key + ": " + queue[key])
            }
        }
    }
}

const q = createQueue()

q.enqueue('Make an head lesson') //peek item removed first
q.enqueue('Help others ')
q.enqueue('Be Happy')

console.log(q.length)

// q.dequeue()
 q.dequeue()
console.log(q.peek())
console.log(q.print())

q.enqueue('Be sad')

console.log(q.print())

exports.createQueue = createQueue