package tests;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import logic.Area;

class AreaTest {
	Area area;
	
	@BeforeEach
	void setArea() {
		area = new Area();
	}

	@Test
	@DisplayName("Test circle() method")
	void testCircle() {
		assertAll(
				() -> assertEquals(28.26, area.circle(3), 0.5),
				() -> assertEquals(94.985, area.circle(5.5))
		);
	}
	
	@Test
	@DisplayName("Test rectangle() method")
	void testRectangle() {
		assertAll(
				() -> assertEquals(12, area.rectangle(3, 4)),
				() -> assertEquals(18.2, area.rectangle(3.5, 5.2))
		);
	}
	
	@Test
	@DisplayName("Test square() method")
	void testSquare() {
		assertAll(
				() -> assertEquals(25, area.square(5)),
				() -> assertEquals(30.25, area.square(5.5))
		);
	}


}
