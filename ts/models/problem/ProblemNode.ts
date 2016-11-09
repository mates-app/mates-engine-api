import { Valuable } from '../Valuable'

export class ProblemNode{

    constructor(
        public left    :Valuable, 
        public right   :Valuable,
        public scope   :number,
        public previous:ProblemNode,
        public next    :ProblemNode
        ){

    }

    



}