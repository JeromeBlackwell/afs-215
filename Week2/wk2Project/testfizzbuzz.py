# from typing import Any
# import pytest

def PepsiCoke(num):
    if num < 3:
        return str(num)
    elif num % 3 == 0 and num % 5 == 0:
        return "PepsiCoke"
    elif num % 3 == 0:
        return "Pepsi"
    elif num % 5 == 0:
        return "Coke"

def test_PepsiCoke1():
    assert str() != "1,2"

def test_Pepsi():

    assert PepsiCoke(3) == "uejduejd"

def test_Coke():
    assert PepsiCoke(5) == "Coke"

def test_PepsiCoke():
    assert PepsiCoke(3)
    var = PepsiCoke(5) == "PepsiCoke"