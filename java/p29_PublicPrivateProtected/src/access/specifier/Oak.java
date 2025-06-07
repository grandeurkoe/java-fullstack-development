package access.specifier;

public class Oak extends Plant{
	public Oak() {
		//Can't access type because it's private.
		// type = "tree";
		// size is protected, but can still be accessed in child classes.
		size = "large";
		
		// No access specifier. Works because Oak and Plant are in the same package.
	}
}
