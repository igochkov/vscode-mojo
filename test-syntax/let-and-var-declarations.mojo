def your_function_1(a, b):
    let c = a
    c = b  # error: c is immutable

    if c != b:
        var c = b
        stuff()

def your_function_2():
    let x: SI8 = 42
    let y: SI64 = 17

    let z: SI8
    if x != 0:
        z = 1
    else:
        z = foo()
    use(z)