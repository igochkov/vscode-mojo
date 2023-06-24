@value
struct MyPair:
    var first: Int
    var second: Int
    def __lt__(self, rhs: MyPair) -> Bool:
        return self.first < rhs.first or
              (self.first == rhs.first and
               self.second < rhs.second)