package polymorphism;

public class App {

	public static void main(String[] args) {
		Plant plant = new Plant();
		Tree tree = new Tree();
		
		Plant plantTwo = tree;
		plantTwo.grow();
		tree.shedLeaves();
		
		// plantTwo is a reference variable of type Plant. This determines what method it can call.
		// The tree object assigned to plantTwo will call the grow() method associated with Tree class.
		// plantTwo.shedLeaves();
		
		doGrow(tree);
		
	}
	
	public static void doGrow(Plant plant) {
		plant.grow();
	}

}
