struct MyString:
    var data: Pointer[UI8]

    # StringRef has a data + length field
    def __init__(inout self, input: StringRef):
        let data = Pointer[UI8].alloc(input.length+1)
        data.memcpy(input.data, input.length)
        data[input.length] = 0
        self.data = Pointer[UI8](data)

    def __del__(owned self):
        self.data.free()

fn useStrings():
    var a: MyString = "hello"
    print(a)   # Should print "hello"
    var b = a  # ERROR: MyString doesn't implement __copyinit__

    a = "Goodbye"
    print(b)   # Should print "hello"
    print(a)   # Should print "Goodbye"

struct MyString:
    def __copyinit__(inout self, existing: Self):
        self.data = Pointer(strdup(existing.data.address))