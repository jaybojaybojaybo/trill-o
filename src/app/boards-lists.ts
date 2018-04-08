export class BoardsListsPair {
    constructor(
        public key: string,
        public $key: string,
        public $value: string
    ) {
        this.key = key;
        this.$key = $key;
        this.$value = $value;
    }
  }