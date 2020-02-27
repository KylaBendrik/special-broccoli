require 'spec_helper'
require_relative '../src/fibonacci.rb'

# the first test shows that fib(0) = 0

describe Fibonacci do

  CASES = [0, 1, 1, 2, 3, 5, 8, 13, 21]

  CASES.each_with_index do |val, index|
    it "gets #{val} for #{index}" do
      expect(subject.fib(index)).to eq val
    end
  end
end