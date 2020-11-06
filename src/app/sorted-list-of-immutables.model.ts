import { Listable } from './listable';

export class SortedListOfImmutables {
    private items: Array<Listable>;

    /**
     *  Constructor.  The current object will become a copy of the
     *  list that the parameter refers to.  
     *  
     *  The copy must be made in such a way that future changes to
     *  either of these two lists will not affect the other. In other words, 
     *  after this constructor runs, adding or removing things from one of 
     *  the lists must not have any effect on the other list.
     *  
     *  @param other the list that is to be copied
     */
    constructor(other: SortedListOfImmutables) {
        this.items = new Array<Listable>();
        if (other != null) {
            for (var i = 0; i < other.items.length; i++) {
                this.items[i] = other.items[i];
            }
        }
    }

    /**
     * Returns the number of items in the list.
     * @return number of items in the list
     */
    public getSize(): number {
        return this.items.length;
    }

    /**
     * Returns a reference to the item in the ith position in the list.  (Indexing
     * is 0-based, so the first element is element 0).
     * 
     * @param i index of item requested
     * @return reference to the ith item in the list
     */
    public get(i: number): Listable {
        return this.items[i];
    }

    /**
     * Adds an item to the list.  This method assumes that the list is already
     * sorted in alphabetical order based on the names of the items in the list.
     * 
     * The new item will be inserted into the list in the appropriate place so
     * that the list will remain alphabetized by names.
     * 
     * In order to accomodate the new item, the internal array must be re-sized 
     * so that it is one unit larger than it was before the call to this method.
     *  
     * @param itemToAdd refers to a Listable item to be added to this list
     */
    public add(itemToAdd: Listable): void {
        let tempItems = new Array<Listable>(this.items.length+1);
        let replaced: boolean = false;
        for (var a = 0; a < this.items.length; a++) {
            tempItems[a] = this.items[a];
        }
        if (this.items.length === 0) {
            tempItems[0] = itemToAdd;
        } else {
            for (var i = 0; i < this.items.length; i++) {
                if (itemToAdd.getName().localeCompare(this.items[i].getName()) < 0 && replaced == false) {
                    tempItems[i] = itemToAdd;
                    for (var b = i + 1; b < tempItems.length; b++) {
                        tempItems[b] = this.items[b - 1];
                    }
                    replaced = true;
                }
            }
            if (replaced == false) {
                tempItems[tempItems.length - 1] = itemToAdd;
            }
        }

        this.items=new Array<Listable>(tempItems.length);
        for (var u = 0; u < tempItems.length; u++) {
            this.items[u] = tempItems[u];
        }
    }

    /**
     * Adds an entire list of items to the current list, maintaining the 
     * alphabetical ordering of the list by the names of the items.
     * 
     * @param listToAdd a list of items that are to be added to the current object
     */
    public addList(listToAdd: SortedListOfImmutables): void {
        for (var i = 0; i < listToAdd.items.length; i++) {
            this.add(listToAdd.items[i]);
        }
    }

    /**
     * Removes an item from the list.
     * 
     * If the list contains the same item that the parameter refers to, it will be 
     * removed from the list.  
     * 
     * If the item appears in the list more than once, just one instance will be
     * removed.
     * 
     * If the item does not appear on the list, then this method does nothing.
     * 
     * @param itemToRemove refers to the item that is to be removed from the list
     */
    public remove(itemToRemove: Listable): void {
        let needsReSizing: boolean = false;
        for (var k = 0; k < this.items.length; k++) {
            if (this.items[k].getName() === itemToRemove.getName()) {
                needsReSizing = true;
                break;
            }
        }

        if (needsReSizing == true) {
            let tempItems = new Array<Listable>(this.items.length - 1);
            let y: number = 0;
            let alreadyRemoved: boolean = false;
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].getName() === itemToRemove.getName() && alreadyRemoved == false) {
                    alreadyRemoved = true;
                    continue;
                } else {
                    tempItems[y] = this.items[i];
                    y++;
                }
            }
            this.items=new Array<Listable>(tempItems.length);
            for (var j = 0; j < this.items.length; j++) {
                this.items[j] = tempItems[j];
            }
        }
    }

    /**
     * Removes an entire list of items from the current list.  Any items in the
     * parameter that appear in the current list are removed; any items in the
     * parameter that do not appear in the current list are ignored.
     * 
     * @param listToRemove list of items that are to be removed from this list
     */
    public removeList(listToRemove: SortedListOfImmutables): void {
        for (var i = 0; i < listToRemove.items.length; i++) {
            this.remove(listToRemove.items[i]);
        }
    }

    /**
     * Returns the sum of the wholesale costs of all items in the list.
     * 
     * @return sum of the wholesale costs of all items in the list
     */
    public getWholesaleCost(): number {
        let wholesaleCostSum: number = 0;
        for (var i = 0; i < this.items.length; i++) {
            wholesaleCostSum += this.items[i].getWholesaleCost();
        }
        return wholesaleCostSum;
    }

    /**
     * Returns the sum of the retail values of all items in the list.
     * 
     * @return sum of the retail values of all items in the list
     */
    public getRetailValue(): number {
        var retailValueSum = 0;
        for (var i = 0; i < this.items.length; i++) {
            retailValueSum += this.items[i].getRetailValue();
        }
        return retailValueSum;
    }

    /**
     * Checks to see if a particular item is in the list.
     * 
     * @param itemToFind item to look for
     * @return true if the item is found in the list, false otherwise
     */
    public checkAvailability(itemToFind: Listable): boolean {
        var itemInList: boolean = false;
        for (var i = 0; i < this.items.length && !itemInList; i++) {
            if (this.items[i].equals(itemToFind)) {
                itemInList = true;
            }
        }
        return itemInList;
    }

    /**
     * Checks if a list of items is contained in the current list.
     * (In other words, this method will return true if ALL of the items in 
     * the parameter are contained in the current list.  If anything is missing,
     * then the return value will be false.)
     * 
     * @param listToCheck list of items that may or may not be a subset of the
     * current list
     * @return true if the parameter is a subset of the current list; false 
     * otherwise
     */
    public checkAvailabilityToList(listToCheck: SortedListOfImmutables): boolean {
        let temp: SortedListOfImmutables = new SortedListOfImmutables(this);

        let itemInList: boolean = false;
        for (var i = 0; i < listToCheck.items.length; i++) {
            if (temp.checkAvailability(listToCheck.items[i]) == false) {
                itemInList = false;
                break;
            } else {
                itemInList = true;
                for (var j = 0; j < temp.items.length; j++) {
                    if (temp.items[j].equals(listToCheck.items[i])) {
                        temp.remove(temp.items[j]);
                        break;
                    }
                }
            }
        }
        return itemInList;

    }

    /*
     * We'll give you this one for free.  Do not modify this method or you
     * will fail our tests!
     */
    public toString(): string {
        var retValue: string = "[ ";
        for (var i = 0; i < this.items.length; i++) {
            if (i != 0) {
                retValue += ", ";
            }
            retValue += this.items[i];
        }
        retValue += " ]";
        return retValue;
    }
}

