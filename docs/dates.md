## Functions

<dl>
<dt><a href="#getDifferenceInDays">getDifferenceInDays(dateLeft, dateRight)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates difference in days between two dates</p>
</dd>
<dt><a href="#getNextDay">getNextDay(day)</a> ⇒ <code>Date</code></dt>
<dd><p>Gets next day</p>
</dd>
<dt><a href="#getPreviousDay">getPreviousDay(day)</a> ⇒ <code>Date</code></dt>
<dd><p>Gets previous day</p>
</dd>
<dt><a href="#getDateRange">getDateRange(dateToAnalyze, amountOfDays)</a> ⇒ <code>Array.&lt;Date&gt;</code></dt>
<dd><p>Gets date range given amount of days before/after</p>
</dd>
</dl>

<a name="getDifferenceInDays"></a>

## getDifferenceInDays(dateLeft, dateRight) ⇒ <code>number</code>

Calculates difference in days between two dates

**Kind**: global function  
**Returns**: <code>number</code> - Difference in days between dates

| Param     | Type              | Description  |
| --------- | ----------------- | ------------ |
| dateLeft  | <code>Date</code> | Bigger date  |
| dateRight | <code>Date</code> | Smaller date |

<a name="getNextDay"></a>

## getNextDay(day) ⇒ <code>Date</code>

Gets next day

**Kind**: global function  
**Returns**: <code>Date</code> - Next day

| Param | Type              | Description             |
| ----- | ----------------- | ----------------------- |
| day   | <code>Date</code> | Day to find next day of |

<a name="getPreviousDay"></a>

## getPreviousDay(day) ⇒ <code>Date</code>

Gets previous day

**Kind**: global function  
**Returns**: <code>Date</code> - Previous day

| Param | Type              | Description                 |
| ----- | ----------------- | --------------------------- |
| day   | <code>Date</code> | Day to find previous day of |

<a name="getDateRange"></a>

## getDateRange(dateToAnalyze, amountOfDays) ⇒ <code>Array.&lt;Date&gt;</code>

Gets date range given amount of days before/after

**Kind**: global function  
**Returns**: <code>Array.&lt;Date&gt;</code> - Resulting date range array

| Param         | Type                | Description                   |
| ------------- | ------------------- | ----------------------------- |
| dateToAnalyze | <code>Date</code>   | Day to consider as center     |
| amountOfDays  | <code>number</code> | Amount of days before / after |
