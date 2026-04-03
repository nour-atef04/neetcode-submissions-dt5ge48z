class Solution {
    copyRandomList(head) {

        if (!head) return null;

        let map = new Map();

        let temp = head;
        let deepCopy = new Node(0);
        let index = 0;

        while(temp){
            map.set(temp, index);
            index++;
            temp = temp.next;
        }

        temp = head;
        let tempCopy = deepCopy;
        let mapCopy = new Map();

        let prev = tempCopy;

        index = 0;

        while(temp){

            if(prev !== tempCopy){
                prev.next = tempCopy;
            }

            if(mapCopy.has(index)){
                tempCopy = mapCopy.get(index);
            }
            else{tempCopy.val = temp.val;
            mapCopy.set(index, tempCopy);}

            if(temp.random !== null){

                let pointingAtIndex = map.get(temp.random);

                if(mapCopy.get(pointingAtIndex)){
                    let pointingAtNode = mapCopy.get(pointingAtIndex);
                    tempCopy.random = pointingAtNode;
                }
                else{
                    let newNode = new Node(temp.random.val); 
                    mapCopy.set(pointingAtIndex, newNode);
                    tempCopy.random = newNode;
                }

            }else{
                tempCopy.random = null;
            }

            if (temp.next) {
                if (!mapCopy.has(index + 1)) {
                    tempCopy.next = new Node(0);
                } else {
                    tempCopy.next = mapCopy.get(index + 1);
                }
            }

            prev = tempCopy;
            tempCopy = tempCopy.next;
            temp = temp.next;
            index++;
        }

        return deepCopy;
    }
}