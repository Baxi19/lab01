import { Listable } from './listable';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';

export class Entree implements Listable{
  private name:string;
	private foodList:SortedListOfImmutables;  // This list will contain Food objects
	
	/**
	 * Standard constructor.  To ensure that the Entree class remains immutable,
	 * this constructor will make a copy of the list that foodListIn refers to.
	 * (This is necessary because a SortedListOfImmutables is mutable.)
	 * 
	 * @param nameIn desired name for this Entree
	 * @param foodListIn desired list of Food for this Entree
	 */
	constructor(nameIn:string, foodListIn:SortedListOfImmutables) {
		this.name = nameIn;
		this.foodList = new SortedListOfImmutables(foodListIn);		
	}
	
	/**
	 * Getter for name of Entree
	 * 
	 * @return reference to the name of Entree
	 */
	public getName():string {
		return this.name;
	}
	
	/**
	 *  Getter for FoodList for this entree.
	 *  
	 *  @return reference to a copy of the FoodList for this entree
	 */
	public getFoodList():SortedListOfImmutables {
		return new SortedListOfImmutables(this.foodList);
	}
	
	/**
	 * Returns the wholesale cost of the food in this entree
	 * 
	 * @return wholesale cost of the food in this entree
	 */
	public getWholesaleCost():number {
		return this.foodList.getWholesaleCost();
	}
	
	/**
	 * Returns the retail value of the food in this entree
	 * 
	 * @return retail value of the food in this entree
	 */
	public getRetailValue():number {
		return this.foodList.getRetailValue();
	}
	
	/**
	 * Compares the current object to the parameter and returns true if they
	 * have the same name.
	 * 
	 * @param other Entree to be compared to the current object
	 * @return true if the current object and the parameter have the same name, 
	 * false otherwise
	 */
	public equals(other:Entree):boolean {
		let sameName:boolean=false;
		if(other.name===this.name){
			sameName=true;
		}
		return sameName;
	}
	
	/* We'll give you this one for free.  Do not modify this method or you will
	 * fail our tests!
	 */
	public toString():string {
		let retValue:string = "< ";
		for (var i = 0; i < this.foodList.getSize(); i++) {
			if (i != 0) {
				retValue += ", ";
			}
			retValue += this.foodList.get(i);
		}
		retValue += " >";
		return retValue;
	}
}
