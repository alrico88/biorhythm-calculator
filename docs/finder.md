<a name="DayFinder"></a>

## DayFinder

**Kind**: global class

- [DayFinder](#DayFinder)
  - [new DayFinder()](#new_DayFinder_new)
  - _instance_
    - [.getNextDayGeneric(checkFunc)](#DayFinder+getNextDayGeneric) ⇒ <code>Date</code>
    - [.getNextDayWhere(desiredValue)](#DayFinder+getNextDayWhere) ⇒ <code>Date</code>
    - [.getNextBestDay()](#DayFinder+getNextBestDay) ⇒ <code>Date</code>
    - [.getNextWorstDay()](#DayFinder+getNextWorstDay) ⇒ <code>Date</code>
    - [.getPreviousDayGeneric(checkFunc)](#DayFinder+getPreviousDayGeneric) ⇒ <code>Date</code>
    - [.getPreviousDayWhere(desiredValue)](#DayFinder+getPreviousDayWhere) ⇒ <code>Date</code>
    - [.getPreviousBestDay()](#DayFinder+getPreviousBestDay) ⇒ <code>Date</code>
    - [.getPreviousWorstDay()](#DayFinder+getPreviousWorstDay) ⇒ <code>Date</code>
  - _static_
    - [.DayFinder](#DayFinder.DayFinder)
      - [new DayFinder(dateOfBirth, startDate, biorhythmType)](#new_DayFinder.DayFinder_new)
    - [.getDayGeneric(dateToAnalyze, checkFunc, dayFunc)](#DayFinder.getDayGeneric) ⇒ <code>Date</code>

<a name="new_DayFinder_new"></a>

### new DayFinder()

DayFinder class
Find next or previous days for best/worst/custom values of biorhythm

<a name="DayFinder+getNextDayGeneric"></a>

### dayFinder.getNextDayGeneric(checkFunc) ⇒ <code>Date</code>

Gets next day for desired biorhythm aspect

**Kind**: instance method of [<code>DayFinder</code>](#DayFinder)  
**Returns**: <code>Date</code> - The best date for that aspect

| Param     | Type                  | Description            |
| --------- | --------------------- | ---------------------- |
| checkFunc | <code>function</code> | value checker function |

<a name="DayFinder+getNextDayWhere"></a>

### dayFinder.getNextDayWhere(desiredValue) ⇒ <code>Date</code>

Gets next day where value is desired value for a biorhythm aspect

**Kind**: instance method of [<code>DayFinder</code>](#DayFinder)  
**Returns**: <code>Date</code> - Date where the value for biorhythm is the desired one

| Param        | Type                | Description                         |
| ------------ | ------------------- | ----------------------------------- |
| desiredValue | <code>number</code> | Value to look for (Between [-1, 1]) |

<a name="DayFinder+getNextBestDay"></a>

### dayFinder.getNextBestDay() ⇒ <code>Date</code>

Gets next best day for desired biorhythm aspect

**Kind**: instance method of [<code>DayFinder</code>](#DayFinder)  
**Returns**: <code>Date</code> - The next best date for that aspect  
<a name="DayFinder+getNextWorstDay"></a>

### dayFinder.getNextWorstDay() ⇒ <code>Date</code>

Gets next worst day for desired biorhythm aspect

**Kind**: instance method of [<code>DayFinder</code>](#DayFinder)  
**Returns**: <code>Date</code> - The worst date for that aspect  
<a name="DayFinder+getPreviousDayGeneric"></a>

### dayFinder.getPreviousDayGeneric(checkFunc) ⇒ <code>Date</code>

Gets previous day for desired biorhythm aspect

**Kind**: instance method of [<code>DayFinder</code>](#DayFinder)  
**Returns**: <code>Date</code> - The best date for that aspect

| Param     | Type                  | Description            |
| --------- | --------------------- | ---------------------- |
| checkFunc | <code>function</code> | value checker function |

<a name="DayFinder+getPreviousDayWhere"></a>

### dayFinder.getPreviousDayWhere(desiredValue) ⇒ <code>Date</code>

Gets previous day where value is desired value for a biorhythm aspect

**Kind**: instance method of [<code>DayFinder</code>](#DayFinder)  
**Returns**: <code>Date</code> - Date where the value for biorhythm is the desired one

| Param        | Type                | Description                         |
| ------------ | ------------------- | ----------------------------------- |
| desiredValue | <code>number</code> | Value to look for (Between [-1, 1]) |

<a name="DayFinder+getPreviousBestDay"></a>

### dayFinder.getPreviousBestDay() ⇒ <code>Date</code>

Gets previous best day for desired biorhythm aspect

**Kind**: instance method of [<code>DayFinder</code>](#DayFinder)  
**Returns**: <code>Date</code> - The previous best date for that aspect  
<a name="DayFinder+getPreviousWorstDay"></a>

### dayFinder.getPreviousWorstDay() ⇒ <code>Date</code>

Gets previous worst day for desired biorhythm aspect

**Kind**: instance method of [<code>DayFinder</code>](#DayFinder)  
**Returns**: <code>Date</code> - The worst date for that aspect  
<a name="DayFinder.DayFinder"></a>

### DayFinder.DayFinder

**Kind**: static class of [<code>DayFinder</code>](#DayFinder)  
<a name="new_DayFinder.DayFinder_new"></a>

#### new DayFinder(dateOfBirth, startDate, biorhythmType)

Creates an instance of DayFinder.

| Param         | Type                       | Description                                         |
| ------------- | -------------------------- | --------------------------------------------------- |
| dateOfBirth   | <code>Date</code>          | The date of birth, as Date                          |
| startDate     | <code>Date</code>          | The date to use as starting point to find other day |
| biorhythmType | <code>BiorhythmType</code> | Biorhythm aspect to look for                        |

<a name="DayFinder.getDayGeneric"></a>

### DayFinder.getDayGeneric(dateToAnalyze, checkFunc, dayFunc) ⇒ <code>Date</code>

Generic day finder based on date and conditions

**Kind**: static method of [<code>DayFinder</code>](#DayFinder)  
**Returns**: <code>Date</code> - Date where condition is met

| Param         | Type                  | Description                        |
| ------------- | --------------------- | ---------------------------------- |
| dateToAnalyze | <code>Date</code>     | Date to analyze                    |
| checkFunc     | <code>function</code> | Value checking function            |
| dayFunc       | <code>function</code> | Add 1 day, subtract 1 day function |
