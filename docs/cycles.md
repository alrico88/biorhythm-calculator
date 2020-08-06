## Functions

<dl>
<dt><a href="#getHowManyFullCycles">getHowManyFullCycles(dateOfBirth, dateToAnalyze)</a> ⇒ <code>number</code></dt>
<dd><p>Gets the &quot;full cycle&quot; status based on birth date and desired date
The full cycle repeats after 21252 days</p>
</dd>
<dt><a href="#getCurrentCycleStart">getCurrentCycleStart(dateOfBirth, biorhythmType)</a> ⇒ <code>Date</code></dt>
<dd><p>Gets current cycle start date</p>
</dd>
<dt><a href="#getCurrentCycleEnd">getCurrentCycleEnd(dateOfBirth, biorhythmType)</a> ⇒ <code>Date</code></dt>
<dd><p>Gets current cycle end date</p>
</dd>
<dt><a href="#getCurrentCyclePercentage">getCurrentCyclePercentage(dateOfBirth, biorhythmType)</a> ⇒ <code>number</code></dt>
<dd><p>Gets current cycle progress in percentage</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#BiorhythmType">BiorhythmType</a> : <code>&#x27;physical&#x27;</code> | <code>&#x27;emotional&#x27;</code> | <code>&#x27;intellectual&#x27;</code></dt>
<dd></dd>
</dl>

<a name="getHowManyFullCycles"></a>

## getHowManyFullCycles(dateOfBirth, dateToAnalyze) ⇒ <code>number</code>

Gets the "full cycle" status based on birth date and desired date
The full cycle repeats after 21252 days

**Kind**: global function  
**Returns**: <code>number</code> - Number representing the number of full cycles the person has endured

| Param         | Type              | Description                            |
| ------------- | ----------------- | -------------------------------------- |
| dateOfBirth   | <code>Date</code> | The date of birth, as Date             |
| dateToAnalyze | <code>Date</code> | The date to calculate the cycle status |

<a name="getCurrentCycleStart"></a>

## getCurrentCycleStart(dateOfBirth, biorhythmType) ⇒ <code>Date</code>

Gets current cycle start date

**Kind**: global function  
**Returns**: <code>Date</code> - The current cycle start date

| Param         | Type                                         | Description                  |
| ------------- | -------------------------------------------- | ---------------------------- |
| dateOfBirth   | <code>Date</code>                            | The date of birth, as Date   |
| biorhythmType | [<code>BiorhythmType</code>](#BiorhythmType) | Biorhythm aspect to look for |

<a name="getCurrentCycleEnd"></a>

## getCurrentCycleEnd(dateOfBirth, biorhythmType) ⇒ <code>Date</code>

Gets current cycle end date

**Kind**: global function  
**Returns**: <code>Date</code> - The current cycle end date

| Param         | Type                                         | Description                  |
| ------------- | -------------------------------------------- | ---------------------------- |
| dateOfBirth   | <code>Date</code>                            | The date of birth, as Date   |
| biorhythmType | [<code>BiorhythmType</code>](#BiorhythmType) | Biorhythm aspect to look for |

<a name="getCurrentCyclePercentage"></a>

## getCurrentCyclePercentage(dateOfBirth, biorhythmType) ⇒ <code>number</code>

Gets current cycle progress in percentage

**Kind**: global function  
**Returns**: <code>number</code> - The progress percentage of the current cycle

| Param         | Type                                         | Description                  |
| ------------- | -------------------------------------------- | ---------------------------- |
| dateOfBirth   | <code>Date</code>                            | The date of birth, as Date   |
| biorhythmType | [<code>BiorhythmType</code>](#BiorhythmType) | Biorhythm aspect to look for |

<a name="BiorhythmType"></a>

## BiorhythmType : <code>&#x27;physical&#x27;</code> \| <code>&#x27;emotional&#x27;</code> \| <code>&#x27;intellectual&#x27;</code>

**Kind**: global typedef
