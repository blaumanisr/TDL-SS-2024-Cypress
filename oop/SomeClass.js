class SomeClass {

    static help() {
        console.log("This is static function");
    }

    helpAgain() {
        console.log("this is NOT a static function");
    }
}

module.exports = SomeClass;
