## Functions

<dl>
<dt><a href="#createCalculator">createCalculator(daysDifference)</a> ⇒ <code>function</code></dt>
<dd><p>Creates a biorhythm calculator based on the days passed since birth</p>
</dd>
<dt><a href="#calculateBiorhythm">calculateBiorhythm(dateOfBirth, dateToAnalyze)</a> ⇒ <code><a href="#BiorhythmResult">BiorhythmResult</a></code></dt>
<dd><p>Calculates biorhythm based on birth date and a custom date</p>
</dd>
<dt><a href="#calculateBiorhythmRange">calculateBiorhythmRange(dateOfBirth, dateToAnalyze, amountOfDays)</a> ⇒ <code><a href="#BiorhythmRangeResult">Array.&lt;BiorhythmRangeResult&gt;</a></code></dt>
<dd><p>Gets biorhythms for date range</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#BiorhythmResult">BiorhythmResult</a></dt>
<dd></dd>
<dt><a href="#BiorhythmRangeResult">BiorhythmRangeResult</a></dt>
<dd></dd>
</dl>

<a name="createCalculator"></a>

## createCalculator(daysDifference) ⇒ <code>function</code>

Creates a biorhythm calculator based on the days passed since birth

**Kind**: global function  
**Returns**: <code>function</code> - Calculator function

| Param          | Type                | Description      |
| -------------- | ------------------- | ---------------- |
| daysDifference | <code>number</code> | Days since birth |

<a name="calculateBiorhythm"></a>

## calculateBiorhythm(dateOfBirth, dateToAnalyze) ⇒ [<code>BiorhythmResult</code>](#BiorhythmResult)

Calculates biorhythm based on birth date and a custom date

**Kind**: global function  
**Returns**: [<code>BiorhythmResult</code>](#BiorhythmResult) - Object that represents the day's status

| Param         | Type              | Description                              |
| ------------- | ----------------- | ---------------------------------------- |
| dateOfBirth   | <code>Date</code> | The date of birth, as Date               |
| dateToAnalyze | <code>Date</code> | The date to obtain the biorhythm data on |

<a name="calculateBiorhythmRange"></a>

## calculateBiorhythmRange(dateOfBirth, dateToAnalyze, amountOfDays) ⇒ [<code>Array.&lt;BiorhythmRangeResult&gt;</code>](#BiorhythmRangeResult)

Gets biorhythms for date range

**Kind**: global function  
**Returns**: [<code>Array.&lt;BiorhythmRangeResult&gt;</code>](#BiorhythmRangeResult) - Objects array that represents the days' status

| Param         | Type                | Description                                                                                              |
| ------------- | ------------------- | -------------------------------------------------------------------------------------------------------- |
| dateOfBirth   | <code>Date</code>   | The date of birth, as Date                                                                               |
| dateToAnalyze | <code>Date</code>   | The date to obtain the biorhythm data on                                                                 |
| amountOfDays  | <code>number</code> | Number of days to add in range (Ex. 3 will give desired date as well as 3 days before, and 3 days after) |

<a name="BiorhythmResult"></a>

## BiorhythmResult

**Kind**: global typedef  
**Properties**

| Name         | Type                |
| ------------ | ------------------- |
| physical     | <code>number</code> |
| emotional    | <code>number</code> |
| intellectual | <code>number</code> |

<a name="BiorhythmRangeResult"></a>

## BiorhythmRangeResult

**Kind**: global typedef  
**Properties**

| Name      | Type                                             |
| --------- | ------------------------------------------------ |
| day       | <code>Date</code>                                |
| biorhythm | [<code>BiorhythmResult</code>](#BiorhythmResult) |
