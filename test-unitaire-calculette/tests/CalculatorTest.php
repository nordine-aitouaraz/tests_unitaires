<?php
use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../calculator.php';

class CalculatorTest extends TestCase
{
    private Calculator $calc;

    protected function setUp(): void
    {
        $this->calc = new Calculator();
    }

    public function testAddition()
    {
        $this->assertEquals(5, $this->calc->calculate('2+3'));
    }

    public function testSoustraction()
    {
        $this->assertEquals(3, $this->calc->calculate('5-2'));
    }

    public function testMultiplication()
    {
        $this->assertEquals(12, $this->calc->calculate('4*3'));
    }

    public function testDivision()
    {
        $this->assertEquals(5, $this->calc->calculate('10/2'));
    }

    public function testDivisionParZero()
    {
        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('Erreur de calcul');
        $this->calc->calculate('10/0');
    }
}
