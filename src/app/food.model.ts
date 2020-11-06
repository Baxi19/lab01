import { Listable } from './listable';

export class Food implements Listable{
    private name:string;
		private wholesaleCost:number;
		private retailCost:number;
		private image;
	
	/**
	 * This array is populated with Food items that are available for use.
	 * 
	 * Use this array any time you need a Food object.  The constructor for
	 * the Food class is private, so the elements of this array are the only
	 * Food objects available.  (You cannot create new ones.)
	 */
    private static FOOD_OBJECTS: Food[] = [new Food("Bacon", 89, 185, "Bacon.jpg"),new Food("Waffle", 178, 350, "Waffle.jpg"),
    new Food("Egg", 47, 89, "Egg.jpg"),
    new Food("Orange Juice", 77, 199, "OrangeJuice.jpg"),
    new Food("Milk", 52, 179, "Milk.jpg"),
    new Food("Toast", 66, 125, "Toast.jpg"),
    new Food("Hashbrowns", 127, 195, "Hashbrowns.jpg"),
    new Food("Pancakes", 179, 350, "Pancakes.jpg"),
    new Food("Coffee", 67, 125, "Coffee.jpg"),
    new Food("Cereal", 129, 275, "Cereal.jpg"),
    new Food("Donut", 89, 129, "Donut.jpg"),
    new Food("Melon", 98, 159, "Melon.jpg"),
    new Food("Pie", 195, 275, "Pie.jpg"),
    new Food("Croissant", 106, 125, "Croissant.jpg")];
    
	constructor(name:string, wholesaleCost:number, retailCost:number, imageName:string) {
		this.name = name;
		this.wholesaleCost = wholesaleCost;
		this.retailCost = retailCost;
		this.image = imageName;//Toolkit.getDefaultToolkit().getImage(imageName);		
	}

	/**
	 * Getter for the Image associated with this food.  (It's a very small
	 * picture of the food item.)
	 * 
	 * @return a picture representing this item
	 */
	public getImage():string {
		return this.image;  // technically, this is a privacy leak!  :-)
	}

	/**
	 * Getter for the name of this food.
	 * 
	 * @return the name of this food
	 */
	public getName():string {
		return this.name;
	}

	/**
	 * Getter for the wholesale cost of this food, measured in pennies.
	 * 
	 * @return wholesale cost for this food item in pennies.
	 */
	public getWholesaleCost():number {
		return this.wholesaleCost;
	}

	/**
	 * Getter for the retail cost of this food, measured in pennies.
	 * 
	 * @return retail cost for this food item in pennies.
	 */
	public getRetailValue():number {
		return this.retailCost;
	}

	/**
	 * Checks if the current object is equal to the parameter.  Note:
	 * only the NAMES of the foods are compared.  If the two foods have
	 * the same name, they are considered equal!
	 * 
	 * @param other Food item to be compared with the current object
	 * @return true if the two Foods have the same name, false otherwise
	 */
	public equals(other:Food):boolean {
		return (this.name === other.name);
	}

	/**
	 * Returns the name of the food.
	 * 
	 * @return the name of the food
	 */
	public toString():string {
		return this.name;
	}
}
