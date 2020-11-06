import { Entree } from './entree.model';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';

export class Restaurant {
    private name:string;
		private menu:SortedListOfImmutables;       // A list of Entree objects	
		private inventory:SortedListOfImmutables;  // A list of Food objects
    private cash:number;
    
    /**
	 * Standard constructor.  The menu and the inventory are both initialized as 
	 * empty lists.  The name and cash amount are set to match the paramters.
	 * 
	 * @param nameIn name of the restaurant
	 * @param startingCash cash amount that the restaurant will have, measured
	 * in pennies
	 */
	constructor(nameIn:string, startingCash:number) {
		this.name=nameIn;
		this.cash=startingCash;
		this.menu=new SortedListOfImmutables(null);
		this.inventory=new SortedListOfImmutables(null);
    }
    
    /**
	 * Getter for the name of the restaurant.
	 * 
	 * @return reference to the name of the restaurant
	 */
	public getName():string {
		return this.name;
	}

	/**
	 * Getter for the menu.
	 * 
	 * @return a reference to a copy of the menu
	 */
	public getMenu():SortedListOfImmutables {
		return new SortedListOfImmutables(this.menu);
	}

	/**
	 * Adds an entree to the menu.
	 * 
	 * @param entreeToAdd reference to the entree to be added to the menu
	 */
	public addEntree(entreeToAdd:Entree):void {
		this.menu.add(entreeToAdd);
	}
	
	/**
	 * Getter for the inventory.
	 * 
	 * @return a reference to a copy of the inventory
	 */
	public getInventory():SortedListOfImmutables {
		return new SortedListOfImmutables(this.inventory);
	}

	/**
	 * Getter for the current amount of cash on hand
	 * 
	 * @return the current amount of cash, measured in pennies
	 */
	public getCash():number {
		return this.cash;
	}

	/**
	 * Checks if the Food items contained in the specified Entree are 
	 * actually contained in the restaurant's inventory.
	 * 
	 * @param entree Entree that we are checking against the inventory
	 * @return true if the list of Food items contained in the Entree are
	 * all present in the inventory, false otherwise.
	 */
	public checkIfInInventory(entree:Entree):boolean {
		return this.inventory.checkAvailabilityToList(entree.getFoodList());
	}

	/**
	 * Adds the specified list of food items to the inventory.  If the 
	 * total wholesale cost of all of the food items combined exceeds 
	 * the amount of cash on hand, then NONE of the food items are added 
	 * to the inventory.  If the amount of cash on hand is sufficient to
	 * pay for the shipment, then the amount of cash on hand is reduced by 
	 * the wholesale cost of the shipment.
	 * 
	 * @param list food items to be added to the inventory
	 * @return true if the food items are added; false if the food items are
	 * not added because their wholesale cost exceeds the current cash
	 * on hand
	 */
	public addShipmentToInventory(list:SortedListOfImmutables):boolean {
		if(list.getWholesaleCost()>this.cash){
			return false;
		}else{
			this.inventory.addList(list);
			this.cash-=list.getWholesaleCost();
			return true;
		}
	}

	/**
	 * Removes the food items contained in the specified Entree from the inventory.
	 * If the inventory does not contain all of the items required for this
	 * Entree, then NOTHING is removed from the inventory.  If the inventory contains
	 * all of the required items, then the amount of cash on hand is INCREASED by
	 * the retail value of the Entree.
	 *  
	 * @param entree Entree that has been ordered
	 * @return true if the food items are removed from the inventory; false
	 * if the food items were not removed because one or more required items
	 * were not contained in the inventory
	 */
	public placeOrder(entree:Entree):boolean {
		if(this.inventory.checkAvailabilityToList(entree.getFoodList())){
			this.cash+=entree.getRetailValue();
			this.inventory.removeList(entree.getFoodList());
			return true;
		}else{
			return false;
		}
	}
}
