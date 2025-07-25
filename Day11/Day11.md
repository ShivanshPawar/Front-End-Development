# 🦁 Sheryians Coding School Cohort – Day11 Learnings


## 📚 100 Important Tailwind CSS Classes


### 🎨 **Colors**

| Class                 | Description                                |
| --------------------- | ------------------------------------------ |
| `text-red-500`        | Sets the text color to red shade 500.      |
| `bg-blue-200`         | Sets background color to blue shade 200.   |
| `border-green-400`    | Sets border color to green shade 400.      |
| `text-white`          | Makes text color white.                    |
| `bg-black`            | Sets background color to black.            |
| `text-gray-700`       | Applies dark gray text color.              |
| `bg-gradient-to-r`    | Creates a gradient from left to right.     |
| `from-purple-400`     | Sets starting gradient color.              |
| `to-pink-600`         | Sets ending gradient color.                |
| `hover:bg-yellow-300` | Changes background to yellow-300 on hover. |

---

### 📏 **Spacing (Margin & Padding)**

| Class       | Description                              |
| ----------- | ---------------------------------------- |
| `m-4`       | Applies margin `1rem` on all sides.      |
| `p-6`       | Applies padding `1.5rem` on all sides.   |
| `mt-2`      | Adds margin-top of `0.5rem`.             |
| `mb-4`      | Adds margin-bottom of `1rem`.            |
| `pl-3`      | Adds padding-left of `0.75rem`.          |
| `pr-2`      | Adds padding-right of `0.5rem`.          |
| `mx-auto`   | Auto margin left & right (center align). |
| `space-x-4` | Horizontal spacing between flex items.   |
| `space-y-2` | Vertical spacing between stacked items.  |
| `gap-4`     | Gap between grid/flex items.             |

---

### 📐 **Layout (Flex & Grid)**

| Class             | Description                              |
| ----------------- | ---------------------------------------- |
| `flex`            | Applies flexbox layout.                  |
| `inline-flex`     | Flexbox layout inline.                   |
| `items-center`    | Aligns items vertically center.          |
| `justify-between` | Spaces children with space between them. |
| `flex-col`        | Stack children vertically.               |
| `flex-row`        | Stack children horizontally.             |
| `flex-wrap`       | Allows items to wrap to next line.       |
| `grid`            | Applies CSS Grid layout.                 |
| `grid-cols-3`     | Creates 3 equal columns.                 |
| `gap-x-4`         | Horizontal gap between grid columns.     |

---

### 📦 **Box Model & Sizing**

| Class           | Description                              |
| --------------- | ---------------------------------------- |
| `w-full`        | Width: 100%                              |
| `w-1/2`         | Width: 50%                               |
| `max-w-sm`      | Max width: small.                        |
| `h-screen`      | Height: 100vh.                           |
| `min-h-[200px]` | Minimum height: 200px (arbitrary value). |
| `aspect-square` | 1:1 aspect ratio box.                    |
| `box-border`    | Includes border in size calculation.     |
| `box-content`   | Excludes border/padding in size.         |
| `overflow-auto` | Adds scroll when content overflows.      |
| `truncate`      | Truncates long text with ellipsis.       |

---

### 🔠 **Typography**

| Class             | Description                                        |
| ----------------- | -------------------------------------------------- |
| `text-xl`         | Extra large font size.                             |
| `text-sm`         | Small font size.                                   |
| `font-bold`       | Makes text bold.                                   |
| `font-light`      | Applies light font weight.                         |
| `uppercase`       | Transforms text to uppercase.                      |
| `capitalize`      | Capitalizes first letter of each word.             |
| `tracking-wide`   | Increases letter spacing.                          |
| `leading-relaxed` | Adjusts line height for readability.               |
| `line-clamp-2`    | Limits lines to 2 and truncates overflow (plugin). |
| `text-center`     | Aligns text center.                                |

---

### 🎯 **Positioning**

| Class             | Description                                       |
| ----------------- | ------------------------------------------------- |
| `relative`        | Sets position to relative.                        |
| `absolute`        | Absolutely positions element inside relative one. |
| `fixed`           | Fixes element to viewport.                        |
| `top-0`           | Positions top edge at 0.                          |
| `left-1/2`        | Moves element to horizontal center.               |
| `translate-x-1/2` | Moves element by half its width (centering).      |
| `z-10`            | Sets z-index to 10.                               |
| `inset-0`         | Sets top, right, bottom, left to 0.               |
| `sticky`          | Makes element stick on scroll.                    |
| `bottom-4`        | 1rem gap from bottom.                             |

---

### 🧱 **Borders & Radius**

| Class           | Description                          |
| --------------- | ------------------------------------ |
| `border`        | Adds border.                         |
| `border-2`      | Border width 2px.                    |
| `border-dashed` | Dashed style border.                 |
| `rounded`       | Small border radius.                 |
| `rounded-lg`    | Larger border radius.                |
| `rounded-full`  | Fully rounded (circle).              |
| `border-t-4`    | Adds 4px border to top.              |
| `divide-y-2`    | Adds vertical borders between items. |
| `ring-2`        | Adds outline ring (focus state).     |
| `outline-none`  | Removes outline on focus.            |

---

### 🧊 **Effects & Transformations**

| Class             | Description                     |
| ----------------- | ------------------------------- |
| `shadow`          | Adds subtle box shadow.         |
| `shadow-lg`       | Adds large shadow.              |
| `hover:shadow-xl` | On hover, increases shadow.     |
| `transition`      | Adds default smooth transition. |
| `duration-300`    | Transition lasts 300ms.         |
| `ease-in-out`     | Ease-in-out animation curve.    |
| `transform`       | Enables transformation.         |
| `scale-105`       | Scales element to 105%.         |
| `rotate-12`       | Rotates element by 12 degrees.  |
| `hover:scale-110` | Enlarges element on hover.      |

---

### 📱 **Responsive Design**

| Class             | Description                                    |
| ----------------- | ---------------------------------------------- |
| `sm:text-sm`      | Text size small on small screens.              |
| `md:w-1/2`        | Width: 50% on medium screens.                  |
| `lg:flex-row`     | Horizontal flex direction on large screens.    |
| `xl:grid-cols-4`  | 4-column grid on extra-large screens.          |
| `hidden`          | Hides element on all screens.                  |
| `md:block`        | Makes element visible from medium screen size. |
| `lg:hidden`       | Hides element on large screens.                |
| `sm:rounded-none` | Removes rounded on small screens.              |
| `xl:items-center` | Centers flex items on xl screens.              |
| `2xl:gap-8`       | Gap 2rem on extra extra large screens.         |

---

## Created with ❤️ by Shivansh 
