#include <iostream>
#include <string>

int main(int argc, char* argv[]) {
    if (argc > 1) {
        std::string input = argv[1];
        std::cout << "Hello, " << input << " from C++!" << std::endl;
    } else {
        std::cout << "No input provided." << std::endl;
    }
    return 0;
}
