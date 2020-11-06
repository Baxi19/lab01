export interface Listable {
  /**
 * Getter for the name of the item
 * @return name of the item
 */
getName():string;

/**
 * Getter for the wholesale cost of the item
 * @return wholesale cost of the item
 */
getWholesaleCost():number;

/**
 * Getter for the retail cost of the item
 * @return retail cost of the item
 */
getRetailValue():number;

/**
 * Checks if the current object is equal to the parameter.
 **/
equals(other:Listable):boolean;

toString():string;
}

