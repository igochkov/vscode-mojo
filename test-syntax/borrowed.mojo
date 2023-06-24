fn use_something_big(borrowed a: SomethingBig, b: SomethingBig):
    """'a' and 'b' are passed the same, because 'borrowed' is the default."""
    a.print_id()
    b.print_id()