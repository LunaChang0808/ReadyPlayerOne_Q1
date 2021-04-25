import define1 from "./ref.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([
        ["manu_inco_grandchild.json",new URL("./files/manu_inco_grandchild",import.meta.url)],
        ["manu_inco.json",new URL("./files/manu_inco",import.meta.url)],
        ["q1.b_IOS_download.json",new URL("./files/b_IOS_download",import.meta.url)],
        ["q1.b_IOS_income.json",new URL("./files/b_IOS_income",import.meta.url)],
        ["manu_inco-9.json",new URL("./files/manu_inco",import.meta.url)],
        ["manu_inco_child-1.json",new URL("./files/manu_inco_child-1",import.meta.url)],
        ["manu_inco_parent-1.json",new URL("./files/manu_inco_parent",import.meta.url)],
        ["monthly_average.json",new URL("./files/monthly_average",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# ReadyPlayerOne --Question 1`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
*<span style="font-size: 12pt"> Attention: If you experience scaling issue for our visualizations, please narrow your viewing window. Enjoy ! </span>* 😉 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Q1: What is the mobile game market capacity and potential in each region?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In order to answer this question, we will dicsuss the following aspects:
- (a). The gross market product and market activity level in each region, which is indicated by total IOS income and downloads in every region.
- (b). Monthly total market product and activity level within five regions.
- (c). Market share of game publishers in five regions.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## (a) Gross Market Product and Activity Level`
)});
  main.variable(observer()).define(["md"], function(md){return(
md` In this part, we aim to visualize the total IOS income and IOS downloads for each region between 2018 and 2019. We also compared the gross number among five regions in order to get an overview of capacity of those regions.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 🔥 Total IOS_incomes for Mobile Games in Five Regions`
)});
  main.variable(observer("viewof options_1")).define("viewof options_1", ["form","html"], function(form,html){return(
form(html`<form style="font-size: 11pt">
Color Scheme:
<select name="scheme">
<option value="Tableau10">Tableau10</option>
<option value="Category10">Category10</option>
<option value="Set1">Set1</option>
<option value="Set2">Set2</option>
<option value="Dark2">Dark2</option>
</select>
<span style="border-left: 2px solid #ddd; padding-left: 5px">
</span>
Style:
<label for="2d"><input name="style" id="2d" type="radio" value="2d" group="a" checked>2D</label>
<label for="3d"><input name="style" id="3d" type="radio" value="3d" group="a">3D</label>
<label for="flat"><input name="style" id="flat" type="radio" value="flat" group="a">Flat</label>
<span style="border-left: 2px solid #ddd; padding-left: 5px">
</span>
<input type=checkbox name=showpct checked>Show percentage of the</input>
<label for="first"><input name="pct" id="first" type="radio" value="first" group="b" checked>first</label>
<label for="previous"><input name="pct" id="previous" type="radio" value="previous" group="b">previous</label>
stage
</form>`)
)});
  main.variable(observer("options_1")).define("options_1", ["Generators", "viewof options_1"], (G, _) => G.input(_));
  main.variable(observer("chart2")).define("chart2", ["d3","FunnelChart","width","height","options_1","q1_ios_income"], function*(d3,FunnelChart,width,height,options_1,q1_ios_income)
{
  const svg = d3
    .create("svg")
    .attr('viewBox', [0, 0, 900, 650])
    .attr('height', 500)
    .attr('width', 800)
    .style('overflow', 'visible');

  yield svg.node();
  new FunnelChart(svg)
    .size([width, height])
    .options({
      palette: d3[`scheme${options_1.scheme}`],
      style: options_1.style,
      showPercentage: options_1.showpct,
      percentage: options_1.pct,
      streamlined: false
    })
    .field({ stage: "region" })
    .data(q1_ios_income)
    .render();

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`### 🔥 Total IOS_downloads for Mobile Games in Five Regions`
)});
  main.variable(observer("chart3")).define("chart3", ["d3","FunnelChart","width","height","options_1","q1_ios_download"], function*(d3,FunnelChart,width,height,options_1,q1_ios_download)
{
  const svg = d3
    .create("svg")
    .attr('viewBox', [0, 0, 900, 650])
    .attr('height', 500)
    .attr('width', 800)
    .style('overflow', 'visible');

  yield svg.node();
  new FunnelChart(svg)
    .size([width, height])
    .options({
      palette: d3[`scheme${options_1.scheme}`],
      style: options_1.style,
      showPercentage: options_1.showpct,
      percentage: options_1.pct,
      streamlined: false
    })
    .field({ stage: "region" })
    .data(q1_ios_download)
    .render();

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`From the plots above, we can see China is the top player in the market, generating total IOS income of 20.7 Gillion dollars between 2018 and 2019. Besdies, USA and Japan are the second and third highest in terms of gross IOS income. However, Korea and Taiwan are two regions that generate the least IOS income. Regarding the IOS download, similarly, we can see that China and USA play the most important role. The conclusion seems quite obvious since both China and USA have larger population compared to the other three regions. Therefore, we took the mobile gamer into account and we assumed that IOS download can somehow represent the gamer population, we thereafter analysed the average IOS income per download.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 🔥 Average IOS Income Per Download`
)});
  main.variable(observer("chart")).define("chart", ["d3","q1_income_per_download","$"], function(d3,q1_income_per_download,$)
{
  const svg = d3
    .create("svg")
    .attr("width", 600)
    .attr("height", 400);

  const margin = { top: 20, right: 100, bottom: 30, left: 100 };
  const width = +svg.attr('width') - margin.left - margin.right;
  const height = +svg.attr('height') - margin.top - margin.bottom;

  const x = d3
    .scaleBand()
    .rangeRound([0, width])
    .padding(0.1);
  const y = d3.scaleLinear().rangeRound([height, 0]);

  var g = svg
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  x.domain(
    q1_income_per_download.map(function(d) {
      return d.region;
    })
  );
  y.domain([
    0,
    d3.max(q1_income_per_download, function(d) {
      return d.frequency;
    })
  ]);

  g.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x));

  g.append('g')
    .attr('class', 'axis axis--y')
    .call(d3.axisLeft(y))
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('Frequency');

  g.selectAll('.bar')
    .data(q1_income_per_download)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', function(d) {
      return x(d.region);
    })
    .attr('y', function(d) {
      return y(d.frequency);
    })
    .attr('width', x.bandwidth())
    .attr('height', function(d) {
      return height - y(d.frequency);
    })
    .attr('title', d => d.frequency)
    .style('fill', 'steelblue')
    .on('mouseover mousemove', function(d) {
      $(this).css('fill', 'tomato');
    })
    .on('mouseout', function(d) {
      $(this).css('fill', 'steelblue');
    });

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`As is shown in the barplot above, the average IOS income per download is the highest in Japan, while the other four regions share similar revenue per download, ranging from 17.56 (Korea) to 25.11 (China). Consequently, we can have a general concept that even though with lower amount of total IOS income and downloads compared to the cases in China and USA, mobile games in Japan generate more averge earnings per mobile gamer than the other four regions, indicating that the general vitality in Japanese mobile game market.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## (b) Monthly Gross Market Product and Activity Level `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In this part, monthly IOS incomes in five regions were inspected. As is indicated in last part, we thought it will be also meaningful to compare the average income per download among regions. Therefore, after having a genral idea of the monthly gross market product and activity level during the time span, we plotted monthly average IOS income per download among five regions. The aim is to analyse if there is an obvious changes in average IOS income in each regions during two years as well as comparing the monthly average IOS income among regions. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 🔥 Monthly Total IOS_Downloads in Five Regions`
)});
  main.variable(observer("downloads")).define("downloads", ["d3","RingChart","q1_b_ios_download"], function*(d3,RingChart,q1_b_ios_download)
{
  const d = 500;
  const svg = d3
    .create("svg")
    .attr('viewBox', [0, 0, 900, 500])
    .attr('height', 500)
    .attr('width', 950)
    .style('overflow', 'visible');

  yield svg.node();
  const chart = new RingChart(svg)
    .tick({ name: "statistics_date" })
    .size([d, d])
    .innerRadius(100)
    .options({
      // Use these options to create a radar chart
      stickyNodes: false,
      nodeStyle: "circle",
      alwaysShowLines: true,
      fixedNodeRadius: 6
    })
    .palette(d3.schemeTableau10)
    .data(q1_b_ios_download)
    .render();

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`### 🔥 Monthly Total IOS_Incomes in Five Regions`
)});
  main.variable(observer("income")).define("income", ["d3","RingChart","q1_b_ios_income"], function*(d3,RingChart,q1_b_ios_income)
{
  const d = 500;
  const svg = d3
    .create("svg")
    .attr('viewBox', [0, 0, 900, 500])
    .attr('height', 500)
    .attr('width', 950)
    .style('overflow', 'visible');

  yield svg.node();
  const chart = new RingChart(svg)
    .tick({ name: "statistics_date" })
    .size([d, d])
    .innerRadius(100)
    .options({
      // Use these options to create a radar chart
      stickyNodes: false,
      nodeStyle: "circle",
      alwaysShowLines: true,
      fixedNodeRadius: 6
    })
    .palette(d3.schemeTableau10)
    .data(q1_b_ios_income)
    .render();

  return svg.node();
}
);
  main.variable(observer("line_chart")).define("line_chart", ["d3","svgWidth","svgHeight","xAxis","yAxis","createPaths","createCircles","myColor","total"], function(d3,svgWidth,svgHeight,xAxis,yAxis,createPaths,createCircles,myColor,total)
{
  const svg = d3
    .create("svg")
    .attr('viewBox', [0, 0, svgWidth, svgHeight])
    .attr('height', 500)
    .attr('width', 900)
    .style('overflow', 'visible');

  svg
    .append('g')
    .attr('id', 'xAxis')
    .call(xAxis);
  svg
    .append('g')
    .attr('id', 'yAxis')
    .call(yAxis);

  const pathGroup = svg
    .append('g')
    .attr('fill', 'none')
    .attr('id', 'path-group')
    .call(createPaths)
    .call(createCircles);

  const moved = (e, d) => {
    pathGroup.select(`#${myColor(d.name)}`).raise();
    const s = total.series.find(it => it.name === d.name);

    pathGroup
      .selectAll('path')
      .attr('stroke', d => (s.name === d.name ? myColor(d.name) : '#ddd'))
      .attr('stroke-width', d => (s.name === d.name ? 4 : 2.5));

    pathGroup.selectAll('.outer-circle').attr('stroke', function() {
      return this.attributes.name.value === s.name ? myColor(s.name) : '#ddd';
    });

    pathGroup.selectAll('.inner-circle').attr('fill', function() {
      return this.attributes.name.value === s.name ? myColor(s.name) : '#ddd';
    });
  };

  const left = () => {
    // return all paths to its original state
    pathGroup
      .selectAll('.path')
      .selectAll('path')
      .attr('stroke', d => myColor(d.name))
      .attr('stroke-width', 2.5);

    // return all circles to its original state
    pathGroup.selectAll('.path').each(function(d) {
      d3.select(this)
        .selectAll('.inner-circle')
        .attr('fill', myColor(d.name));

      d3.select(this)
        .selectAll('.outer-circle')
        .attr('stroke', myColor(d.name));
    });
  };

  const hover = p => {
    p.on('mousemove', moved).on('mouseleave', left);
  };

  // hover
  const paths = pathGroup.selectAll('.path');
  paths.call(hover);

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`We can see from the multi-line chart and the two radar plots that China has generally the most downloads amount and generated the largest IOS income within two years. The change in income is not so ovbious in the radar plot, however, from the multi-line chart, we can see there is a dramatic changes in montly total IOS income in both Japan and China, but we cannot conclude if the change is periodical due to the relatively small time span.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 🔥 Monthly Average IOS Income Per Download among Five Regions`
)});
  main.variable(observer("avg_income")).define("avg_income", ["d3","RingChart","monthly_average"], function*(d3,RingChart,monthly_average)
{
  const d = 500;
  const svg = d3
    .create("svg")
    .attr('viewBox', [0, 0, 900, 500])
    .attr('height', 500)
    .attr('width', 950)
    .style('overflow', 'visible');

  yield svg.node();
  const chart = new RingChart(svg)
    .tick({ name: "statistics_date" })
    .size([d, d])
    .innerRadius(100)
    .options({
      // Use these options to create a radar chart
      stickyNodes: false,
      nodeStyle: "circle",
      alwaysShowLines: true,
      fixedNodeRadius: 6
    })
    .palette(d3.schemeTableau10)
    .data(monthly_average)
    .render();

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`From the radar plot, In general, Japan has the highest monthly avaerge during the two years, and the rest average IOS income per download in other four regions are relatively lowers. In terms of the regularity, we could see very obvious trend of these changes. However, we can briefly observe that in China, there was a dramatic increase of monthly avaerge income increase from January 2018 to March 2018, and there was also an significant decrease in November 2018. Simiarly, we also noticed that the monthly average income per download in Korea peaked in 2018/04,2019/07, 2019/09 and 2019/12.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## (c) Market share of game publishers`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The last two parts offered us a brief understanding of general market product and activity level. In this part, we would like to take a look at the situation from the game publisers' aspect. The two sunburst plots are presented below to show the allocation of game publishers in each region. The innermost annulus indicates the proportion of gross ios income that was generated within each region between 2018 and 2019. In the middle ring, the country of origin for game publishers in each region was illustrated. Additionally, specific game publisher and their contribution to the general IOS income were presented in the outmost ring. 

From those two plots, we want to know whether a certain region is dominated by domestic game publishers or oversea game publisers. Even though with similar structures, the two plots provide us with different intepretations. See detail intepretations below.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 🔥 Game Publisher's Market Share with IOS Income Percentage Information`
)});
  main.variable(observer("breadcrumb")).define("breadcrumb", ["d3","breadcrumbWidth","breadcrumbHeight","sunburst","breadcrumbPoints","color_2"], function(d3,breadcrumbWidth,breadcrumbHeight,sunburst,breadcrumbPoints,color_2)
{
  const svg = d3
    .create("svg")
    .attr("viewBox", `0 0 ${breadcrumbWidth * 8} ${breadcrumbHeight}`)
    .style("font", "10px sans-serif")
    .style("margin", "5px");

  const g = svg
    .selectAll("g")
    .data(sunburst.sequence)
    .join("g")
    .attr("transform", (d, i) => `translate(${i * breadcrumbWidth}, 0)`);

  g.append("polygon")
    .attr("points", breadcrumbPoints)
    .attr("fill", d => color_2(d.data.name))
    .attr("stroke", "white")
    .attr("fill-opacity", .8);
  
  g.append("text")
    .attr("x", (breadcrumbWidth + 10) / 2)
    .attr("y", 14)
    .attr("dy", "0.35em")
    .attr("text-anchor", "middle")
    .attr("fill", "black")
    .text(d => d.data.name);

  // svg
  //   .append("text")
  //   .text(sunburst.percentage > 0 ? sunburst.percentage + "%" : "")
  //   .attr("x", (sunburst.sequence.length + 0.5) * breadcrumbWidth)
  //   .attr("y", breadcrumbHeight / 2)
  //   .attr("dy", "0.35em")
  //   .attr("text-anchor", "middle");

  return svg.node();
}
);
  main.variable(observer("viewof sunburst")).define("viewof sunburst", ["partition","data","d3","radius","width","color_2","arc","mousearc","label_partition","label3_data","label2_data","label_data","label_radius"], function(partition,data,d3,radius,width,color_2,arc,mousearc,label_partition,label3_data,label2_data,label_data,label_radius)
{
  const root = partition(data);
  const svg = d3
    .create("svg")
    .attr('viewBox', [0, 0, 900, 500])
    .attr('height', 500)
    .attr('width', 950)
    .style("font", "14px sans-serif")
    .attr("fill-opacity", 0.6);
  // Make this into a view, so that the currently hovered sequence is available to the breadcrumb

  const element = svg.node();
  element.value = { sequence: [], percentage: 0.0 };

  const label = svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("fill", "#888")
    .style("visibility", "hidden");

  label
    .append("tspan")
    .attr("class", "percentage")
    .attr("x", 0)
    .attr("y", 0)
    .attr("dy", "-0.1em")
    .attr("font-size", "3em")
    .attr("fill-opacity", 1)
    .text("");

  label
    .append("tspan")
    .attr("x", 0)
    .attr("y", 0)
    .attr("dy", "1.5em")
    .attr("fill-opacity", 1)
    .text("of the IOS income");

  svg
    .attr("viewBox", `${-radius} ${-radius} ${width} ${width}`)
    .style("max-width", `${width}px`)
    .style("font", "12px sans-serif");

  const g = svg
    .append("g")
    .attr("transform", `translate(${width / 2},${width / 2})`);

  const path = svg
    .append("g")
    .selectAll("path")
    .data(
      root.descendants().filter(d => {
        // Don't draw the root node, and for efficiency, filter out nodes that would be too small to see
        return d.depth && d.x1 - d.x0 > 0.001;
      })
    )
    .join("path")
    .attr("fill", d => color_2(d.data.name))
    .attr("d", arc);

  svg
    .append("g")
    .attr("fill", "none")
    .attr("pointer-events", "all")
    .on("mouseleave", () => {
      path.attr("fill-opacity", .6);
      label.style("visibility", "hidden");
      // Update the value of this view
      element.value = { sequence: [], percentage: 0.0 };
      element.dispatchEvent(new CustomEvent("input"));
    })
    .selectAll("path")
    .data(
      root.descendants().filter(d => {
        // Don't draw the root node, and for efficiency, filter out nodes that would be too small to see
        return d.depth && d.x1 - d.x0 > 0.001;
      })
    )
    .join("path")
    .attr("d", mousearc)
    .on("mouseenter", (event, d) => {
      // Get the ancestors of the current segment, minus the root
      const sequence = d
        .ancestors()
        .reverse()
        .slice(1);
      // Highlight the ancestors
      path.attr("fill-opacity", node =>
        sequence.indexOf(node) >= 0 ? 0.8 : 0.3
      );
      const percentage = ((100 * d.value) / root.value).toPrecision(3);
      label
        .style("visibility", null)
        .select(".percentage")
        .text(percentage + "%");
      // Update the value of this view with the currently hovered sequence and percentage
      element.value = { sequence, percentage };
      element.dispatchEvent(new CustomEvent("input"));
    });

  // ADDING GRANDCHILD LABELS //

  const label3_root = label_partition(label3_data);

  label3_root.each(l => (l.current = l));

  const label3_g = svg.append("g");

  const aroma3 = label3_g
    .append("g")
    .attr("pointer-events", "none")
    .attr("text-anchor", "middle")
    .style("user-select", "none")
    .selectAll("text")
    .data(label3_root.descendants().slice(1))
    .join("text")
    .attr("font-size", "5pt")
    .attr("fill", "white")
    .attr("dy", "0.35em")
    .attr("fill-opacity", l => +labelVisible2(l.current))
    .attr("transform", l => labelTransform3(l.current))
    .text(l => l.data.name);

  function labelVisible2(l) {
    return (l.y1 - l.y0) * (l.x1 - l.x0) > 0.02;
  }

  function labelTransform3(l) {
    const x = (((l.x0 + l.x1) / 2) * 180) / Math.PI;
    const y = ((l.y0 + l.y1) / 2) * 85;
    return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
  }

  // ADDING PARENT LABELS //

  const label2_root = label_partition(label2_data);

  label2_root.each(l => (l.current = l));

  const label2_g = svg.append("g");

  const aroma2 = label2_g
    .append("g")
    .attr("pointer-events", "none")
    .attr("text-anchor", "middle")
    .style("user-select", "none")
    .selectAll("text")
    .data(label2_root.descendants().slice(1))
    .join("text")
    .attr("font-size", "8pt")
    .attr("fill", "white")
    .attr("dy", "0.35em")
    .attr("fill-opacity", l => +labelVisible(l.current))
    .attr("transform", l => labelTransform2(l.current))
    .text(l => l.data.name);

  function labelTransform2(l) {
    const x = (((l.x0 + l.x1) / 2) * 180) / Math.PI;
    const y = ((l.y0 + l.y1) / 2) * 129;
    return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
  }

  // ADDING CHILD LABELS //

  const label_root = label_partition(label_data);

  label_root.each(l => (l.current = l));

  const label_g = svg.append("g");

  const aroma = label_g
    .append("g")
    .attr("pointer-events", "none")
    .attr("text-anchor", "middle")
    .style("user-select", "none")
    .selectAll("text")
    .data(label_root.descendants().slice(1))
    .join("text")
    .attr("font-size", "5pt")
    .attr("fill", "white")
    .attr("dy", "0.35em")
    .attr("fill-opacity", l => +labelVisible(l.current))
    .attr("transform", l => labelTransform(l.current))
    .text(l => l.data.name);

  function labelVisible(l) {
    return l.y1 <= 3 && l.y0 >= 1 && (l.y1 - l.y0) * (l.x1 - l.x0) > 0.03;
  }

  function labelTransform(l) {
    const x = (((l.x0 + l.x1) / 2) * 180) / Math.PI;
    const y = ((l.y0 + l.y1) / 2) * label_radius;
    return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
  }

  return element;
}
);
  main.variable(observer("sunburst")).define("sunburst", ["Generators", "viewof sunburst"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### 🔥 Game Publisher's Market Share without IOS Percentage Information `
)});
  main.variable(observer("partion_chart")).define("partion_chart", ["partition_1","manu_inco","d3","width_1","color_1","arc_1","format_1","radius_1"], function(partition_1,manu_inco,d3,width_1,color_1,arc_1,format_1,radius_1)
{
  const root = partition_1(manu_inco);

  root.each(d => (d.current = d));

  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, 600, 400])
    .attr('height', 500)
    .attr('width', 900)
    .style("font", "8px sans-serif");

  const g = svg
    .append("g")
    .attr("transform", `translate(${width_1 / 2},${width_1 / 2})`);

  const path = g
    .append("g")
    .selectAll("path")
    .data(root.descendants().slice(1))
    .join("path")
    .attr("fill", d => {
      while (d.depth > 3) d = d.parent;
      return color_1(d.data.name);
    })
    .attr("fill-opacity", d =>
      arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0
    )
    .attr("d", d => arc_1(d.current));

  path
    .filter(d => d.children)
    .style("cursor", "pointer")
    .on("click", clicked);

  path.append("title").text(
    d =>
      `${d
        .ancestors()
        .map(d => d.data.name)
        .reverse()
        .join("/")}\n${format_1(d.value)}`
  );

  const label = g
    .append("g")
    .attr("pointer-events", "none")
    .attr("text-anchor", "middle")
    .style("user-select", "none")
    .selectAll("text")
    .data(root.descendants().slice(1))
    .join("text")
    .attr("dy", "0.35em")
    .attr("fill-opacity", d => +labelVisible(d.current))
    .attr("transform", d => labelTransform(d.current))
    .text(d => d.data.name);

  const parent = g
    .append("circle")
    .datum(root)
    .attr("r", radius_1)
    .attr("fill", "none")
    .attr("pointer-events", "all")
    .on("click", clicked);

  function clicked(event, p) {
    parent.datum(p.parent || root);

    innerTitleLine1.text(`${p.data.name}`);

    root.each(
      d =>
        (d.target = {
          x0:
            Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) *
            2 *
            Math.PI,
          x1:
            Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) *
            2 *
            Math.PI,
          y0: Math.max(0, d.y0 - p.depth),
          y1: Math.max(0, d.y1 - p.depth)
        })
    );

    const t = g.transition().duration(750);

    // Transition the data on all arcs, even the ones that aren’t visible,
    // so that if this transition is interrupted, entering arcs will start
    // the next transition from the desired position.
    path
      .transition(t)
      .tween("data", d => {
        const i = d3.interpolate(d.current, d.target);
        return t => (d.current = i(t));
      })
      .filter(function(d) {
        return +this.getAttribute("fill-opacity") || arcVisible(d.target);
      })
      .attr("fill-opacity", d =>
        arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0
      )
      .attrTween("d", d => () => arc_1(d.current));

    label
      .filter(function(d) {
        return +this.getAttribute("fill-opacity") || labelVisible(d.target);
      })
      .transition(t)
      .attr("fill-opacity", d => +labelVisible(d.target))
      .attrTween("transform", d => () => labelTransform(d.current));
  }

  function arcVisible(d) {
    return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
  }

  function labelVisible(d) {
    return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
  }

  function labelTransform(d) {
    const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
    const y = ((d.y0 + d.y1) / 2) * radius_1;
    return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
  }
  const innerTitleLine1 = g
    .append("text")
    .attr("pointer-events", "none")
    .attr("text-anchor", "middle")
    .style("user-select", "none")
    .style("font-size", "3em")
    .attr("dy", "-0.55em")
    .attr("fill-opacity", 1)
    .text(`Market`);

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`To be specific, there are some differences between the aboving two plots. The first one has an view of percentage while the second plot is zoomable when you click each proportion of the ring. Additionally, the IOS income percentage was indicated in the first plot, however even without detailed percentage number, the zoomable sunburst plot gives us a glance over the detailed game publisher allocation.

The innermost ring gave the same results as presented in Part (a) that China, USA, and Japan were the three top markets that generated the most IOS income in 2018 and 2019.

Moreover, before obtaining the plots, we had a question about whether the domestic game publishers are playing a leading role in each region or not. Obviously, from the two plot, we can conclude that it is the case for most regions except Taiwan. However, it is understandable since mainland China has a large impact on the mobile game markey in Taiwan. 

Even though with domestic game publishers dominating the market in mainland China, Japan, USA, and South Korea, there is still a slightly difference among these four regions. It is apparent that their native game publishers are in leading position in both mainland China and Japan, with about 93% and 72% predominance in China and Japan, respectively. On the other side, the case is a bit different in Korea and USA. There is a great diversity of game publishers origins in USA, the mobile game market seems to be more open and more inclusive in USA. As for Korea, the native game publishers contributed 58% of gross income, meanwhile the chinese game publishers also played an important role in Korean market, generating almost 28% of total income in Korea. 

In general, we can inspect from the two plots that the Chinese game publishers are very competent in all five regions. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Data`
)});
  main.variable(observer("q1_ios_income")).define("q1_ios_income", function(){return(
[
  { region: "China", value: 20742175685 },
  { region: "Japan", value: 10875897871 },
  { region: "Korea", value: 921422225 },
  { region: "Taiwan", value: 1215950829 },
  { region: "U.S.A", value: 11652439183 }
]
)});
  main.variable(observer("q1_ios_download")).define("q1_ios_download", function(){return(
[
  { region: "China", value: 677507773 },
  { region: "Japan", value: 142119779 },
  { region: "Korea", value: 52468149 },
  { region: "Taiwan", value: 48416234 },
  { region: "U.S.A", value: 523570214 }
]
)});
  main.variable(observer("q1_b_ios_income")).define("q1_b_ios_income", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("q1.b_IOS_income.json").json()
)});
  main.variable(observer("q1_income_per_download")).define("q1_income_per_download", function(){return(
[
  { region: "China", frequency: 30.61 },
  { region: "Japan", frequency: 76.53 },
  { region: "Korea", frequency: 17.56 },
  { region: "Taiwan", frequency: 25.11 },
  { region: "U.S.A", frequency: 22.26 }
]
)});
  main.variable(observer("q1_b_ios_download")).define("q1_b_ios_download", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("q1.b_IOS_download.json").json()
)});
  main.variable(observer("monthly_average")).define("monthly_average", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("monthly_average.json").json()
)});
  main.variable(observer("total")).define("total", function(){return(
{
  series: [
    {
      name: 'China',
      values: [
        658306170,
        808166530,
        854057139,
        830917193,
        823470654,
        825578476,
        853983057,
        879278472,
        846283238,
        883594830,
        854860585,
        925440720,
        995493657,
        1026733731,
        974419105,
        942199674,
        1001160372,
        939978093,
        938499124,
        986127236,
        838582183,
        705548087,
        652728738,
        696768621
      ]
    },
    {
      name: 'Japan',
      values: [
        659367397,
        446016232,
        402493232,
        389840114,
        403179494,
        374130065,
        421882206,
        384548520,
        390803572,
        392823438,
        403215741,
        474235051,
        566704054,
        394860564,
        417644041,
        408374275,
        472285194,
        436481881,
        528377197,
        503085746,
        528006241,
        446284982,
        487162600,
        544096034
      ]
    },
    {
      name: 'Korea',
      values: [
        39797629,
        33138471,
        47767479,
        36052244,
        35889536,
        34365000,
        34992448,
        35297486,
        36265676,
        38857978,
        35548097,
        46317229,
        38468512,
        38534436,
        41042852,
        39877288,
        42144502,
        39436511,
        38491760,
        35905993,
        37255532,
        34802770,
        38354841,
        42817955
      ]
    },
    {
      name: 'Taiwan',
      values: [
        42004633,
        47975974,
        40876926,
        46268844,
        49372369,
        50282782,
        50080700,
        52303357,
        51461092,
        49759416,
        45340172,
        47631073,
        52970131,
        57743304,
        59940184,
        55051243,
        49646503,
        51475649,
        47298686,
        51396873,
        59082051,
        49269467,
        56511976,
        52207424
      ]
    },
    {
      name: 'USA',
      values: [
        398713133,
        380887019,
        448966323,
        472120245,
        466576943,
        439177828,
        460508161,
        463731415,
        453784313,
        459833093,
        468811272,
        521962737,
        503958556,
        486947876,
        521381728,
        525463232,
        546880716,
        531166135,
        540350637,
        515289169,
        520689762,
        497043423,
        475253260,
        552942207
      ]
    }
  ],
  dates: [
    new Date('2018-01-01'),
    new Date('2018-02-01'),
    new Date('2018-03-01'),
    new Date('2018-04-01'),
    new Date('2018-05-01'),
    new Date('2018-06-01'),
    new Date('2018-07-01'),
    new Date('2018-08-01'),
    new Date('2018-09-01'),
    new Date('2018-10-01'),
    new Date('2018-11-01'),
    new Date('2018-12-01'),
    new Date('2019-01-01'),
    new Date('2019-02-01'),
    new Date('2019-03-01'),
    new Date('2019-04-01'),
    new Date('2019-05-01'),
    new Date('2019-06-01'),
    new Date('2019-07-01'),
    new Date('2019-08-01'),
    new Date('2019-09-01'),
    new Date('2019-10-01'),
    new Date('2019-11-01'),
    new Date('2019-12-01')
  ]
}
)});
  main.variable(observer("data")).define("data", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("manu_inco.json").json()
)});
  main.variable(observer("label_data")).define("label_data", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("manu_inco_child-1.json").json()
)});
  main.variable(observer("label2_data")).define("label2_data", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("manu_inco_parent-1.json").json()
)});
  main.variable(observer("label3_data")).define("label3_data", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("manu_inco_grandchild.json").json()
)});
  main.variable(observer("manu_inco")).define("manu_inco", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("manu_inco-9.json").json()
)});
  main.variable(observer("popper")).define("popper", ["require"], function(require){return(
require("https://unpkg.com/popper.js@1")
)});
  main.variable(observer("tippy")).define("tippy", ["require"], function(require){return(
require("https://unpkg.com/tippy.js@4")
)});
  main.variable(observer()).define(["tippy"], function(tippy){return(
tippy('[title]', {
  content: e => (+e.attributes.title.nodeValue).toFixed(2),
  arrow: true,
  size: 'large',
  animation: 'scale'
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Source Code`
)});
  main.variable(observer("Paginator")).define("Paginator", ["d3"], function(d3){return(
class Paginator {
    constructor(table) {
        this._table = table;
        this._tableWidth = 0;
        this._tableHeight = 0;

        this._top = 0;
        this._left = 0;
        this._pw = 0;
        this._sw = 0;

        this._controls = {
            gotoInput: false,
            recordsPerPageSelector: true
        };
        this._options = {
            position: "top",
            selector: "left",
            buttonColor: "#aaa"
        }
        this._recordsPerPageSelections = [25, 50, 75];

        this._recordCount = 0;
        this._recordsPerPage = 50;
        this._currentPage = 1;
        this._totalPages = 0;
        this._currFloor = 0;
        this._currCeiling = 0;

        this._buttonPadding = 15;
        this._buttonSpacing = 5;
        this._containerTable = null;
        this._selectorCell = null;
        this._paginatorCell = null;

        this._onPageNumberChange = null;
        this._onRecordsPerPageChange = null;
    }

    controls(_) {
        return arguments.length ? (this._controls = _, this) : this._controls;
    }

    options(_) {
        return arguments.length ? (this._options = _, this) : this._options;
    }

    position(_) {
        return arguments.length ? (this._left = _[0], this._top = _[1], this) : [this._left, this.top];
    }

    buttonPadding(_) {
        return arguments.length ? (this._buttonPadding = _, this) : this._buttonPadding;
    }

    buttonSpacing(_) {
        return arguments.length ? (this._buttonSpacing = _, this) : this._buttonSpacing;
    }

    recordsPerPageSelections(_) {
        return arguments.length ? (this._recordsPerPageSelections = _, this) : this._recordsPerPageSelections;
    }

    recordsPerPage(_) {
        if (arguments.length) {
            this._recordsPerPage = _;
            this._totalPages = Math.ceil(this._recordCount / this._recordsPerPage);
            this._validateCurrentPage();
            return this;
        }
        else
            return this._recordsPerPage;
    }

    recordCount(_) {
        if (arguments.length) {
            this._recordCount = _;
            this._totalPages = Math.ceil(this._recordCount / this._recordsPerPage);
            this._validateCurrentPage();
            return this;
        }
        else
            return this._recordCount;
    }

    onPageNumberChange(_) {
        return arguments.length ? (this._onPageNumberChange = _, this) : this._onPageNumberChange;
    }

    onRecordsPerPageChange(_) {
        return arguments.length ? (this._onRecordsPerPageChange = _, this) : this._onRecordsPerPageChange;
    }

    init(recordsPerPage, recordCount) {
        this._recordsPerPage = recordsPerPage;
        this._recordCount = recordCount;
        this._totalPages = Math.ceil(this._recordCount / this._recordsPerPage);
        this._resetBoundary();
        return this;
    }

    render() {
        this._prepare();
        this._createContainers();
        this._renderPaginator();
        if (this._controls.recordsPerPageSelector) {
            this._renderRecordsPerPageSelector();
        }

        this._table.g.append(() => this._containerTable.node());
        return this;
    }

    _prepare() {
        const s = this._table.size();
        this._tableWidth = s[0];
        this._tableHeight = s[1];
    }

    _createContainers() {
        const c = d3.create("svg:g");
        if (this._options.position === "top")
            c.attr("transform", `translate(${this._left},${this._top})`);
        else
            c.attr("transform", `translate(${this._left},${this._top})`);

        this._containerTable = c;
        this._createSelectorCell();
        this._createPaginatorCell();
    }

    _createSelectorCell() {
        if (this._selectorCell) this._selectorCell.remove();
        this._selectorCell = this._containerTable.append("g");
    }

    _createPaginatorCell() {
        if (this._paginatorCell) this._paginatorCell.remove();
        this._paginatorCell = this._containerTable.append("g");
    }

    _renderPaginator(pnum) {
        this._createPaginatorCell();

        //if (this._controls.gotoInput) this._addGotoInput(pnum);
        var tx = 0;
        tx += this._addPageButton(1, tx);
        if (this._currFloor === 1 && this._currentPage < 5) {
            for (let i = 2; i <= this._currCeiling; i++)
                tx += this._addPageButton(i, tx);
        }
        else {
            var floor;
            if (this._totalPages === 5) {
                floor = 2;
            }
            else {
                floor = this._currFloor;
                tx += this._addSeperator(tx);
            }

            for (let i = floor; i <= this._currCeiling; i++) {
                tx += this._addPageButton(i, tx);
            }
        }

        if (this._currCeiling < this._totalPages) {
            tx += this._addSeperator(tx);
            tx += this._addPageButton(this._totalPages, tx);
        }

        this._pw = tx;
        this._adjust();
    }

    _renderRecordsPerPageSelector() {
        this._createSelectorCell();
        var tx = 0;
        this._recordsPerPageSelections.forEach(d => {
            tx += this._addSelectorButton(d, tx);
        });
        this._sw = tx;
        this._selectorCell.attr("transform", `translate(${this._tableWidth - tx},0)`);
    }

    _adjust() {
        const left = this._selectorCell && this._pw > this._tableWidth - this._sw ? this._pw + 30 : this._tableWidth - this._sw;
        this._selectorCell.attr("transform", `translate(${left},0)`);
    }

    _addSelectorButton(num, tx) {
        tx += this._buttonSpacing;
        const s = num.toString();
        const b = this._getBBox(s);
        this._selectorCell.append(() =>
            this._addButton(s, "selBtn", true, b.width, b.height, tx, num === this._recordsPerPage)
                .attr("num", num)
                .on("click", e => this._clickSelectorNumber(e))
                .node()
        );
        return b.width + this._buttonPadding + this._buttonSpacing;
    }

    _addPageButton(pageNum, tx) {
        tx += this._buttonSpacing;
        const s = pageNum.toString();
        const b = this._getBBox(s);
        this._paginatorCell.append(() =>
            this._addButton(s, "pageBtn", true, b.width, b.height, tx, pageNum === this._currentPage)
                .attr("pageNum", pageNum)
                .on("click", e => this._clickPageNumber(e))
                .node()
        );
        return b.width + this._buttonPadding + this._buttonSpacing;
    }

    _addSeperator(tx) {
        tx += this._buttonSpacing;
        const s = "...";
        const b = this._getBBox(s);
        this._paginatorCell.append(() => this._addButton(s, "seperator", false, b.width, b.height, tx).node());
        return b.width + this._buttonPadding + this._buttonSpacing;
    }

    _addButton(caption, className, rect, w, h, tx, selected) {
        const rw = w + this._buttonPadding,
            rh = h + this._buttonPadding / 2;

        return d3.create("svg:g")
            .attr("class", className)
            .attr("text-anchor", "middle")
            .attr("transform", `translate(${tx},0)`)
            .call(g => {
                if (rect)
                    g.append("rect")
                        .attr("rx", 4).attr("ry", 4)
                        .attr("width", rw).attr("height", rh)
                        .attr("opacity", selected ? 1 : 0)
                        .attr("fill", this._options.buttonColor)
            })
            .call(g => g.append("text")
                .attr("transform", `translate(${rw / 2},${rh / 2 + h / 4})`)
                .text(caption));
    }

    _getBBox(str) {
        const svg = this._table.svg;
        if (!svg) return { width: 0, height: 0 };
        else {
            var t;
            try {
                t = svg.append("text").text(str);
                return t.node().getBBox();
            }
            finally {
                t.remove();
            }
        }
    }

    _gotoPage(pnum) {
        if (pnum < 1)
            pnum = 1;
        else if (pnum > this._totalPages)
            pnum = this._totalPages;

        if (pnum <= this._totalPages) {
            if (pnum >= 1 && pnum <= 4) {
                this._currFloor = 1;
                if (this._totalPages <= 5)
                    this._currCeiling = this._totalPages;
                else
                    this._currCeiling = 5;
            }
            else if (pnum >= this._totalPages - 4 && pnum <= this._totalPages) {
                this._currFloor = this._totalPages - 4;
                this._currCeiling = this._totalPages;
            }
            else {
                this._currFloor = pnum - 2;
                this._currCeiling = pnum + 1;
            }
        }
        this._currentPage = pnum;
        return this._currentPage;
    }

    _clickPageNumber(e) {
        var btn = e.currentTarget;
        var pnum = +btn.attributes["pageNum"].value;

        this._currentPage = pnum;
        if (pnum == this._currCeiling && pnum != this._totalPages) {
            this._currCeiling++;
            if (this._currCeiling + 2 >= this._totalPages) {
                this._currCeiling = this._totalPages;
                this._currFloor = this._totalPages - 4;
            }
            else
                this._currFloor = this._currCeiling - 3;
            this._renderPaginator();
        }
        else if (pnum == this._currFloor) {
            this._currFloor--;
            if (this._currFloor < 3)
                this._resetBoundary();
            else
                this._currCeiling = this._currFloor + 3;
            this._renderPaginator();
        }
        else if (pnum == 1) {
            this._resetBoundary();
            this._renderPaginator();
        }
        else if (pnum == this._totalPages && this._totalPages > 5) {
            this._currCeiling = this._totalPages;
            this._currFloor = this._totalPages - 4;
            this._renderPaginator();
        }
        else {
            this._paginatorCell
                .selectAll("rect")
                .nodes().forEach(node => {
                    const num = +node.parentElement.attributes["pageNum"].value;
                    node.setAttribute("opacity", num === this._currentPage ? 1 : 0);
                });
        }

        if (this._onPageNumberChange) {
            var r = this._getRange(pnum);
            this._onPageNumberChange(pnum, r.begin, r.end);
        }
    }

    _clickSelectorNumber(e) {
        var btn = e.currentTarget;
        var num = +btn.attributes["num"].value;

        this.recordsPerPage(num);
        this._selectorCell
            .selectAll("rect")
            .nodes().forEach(node => {
                const n = +node.parentElement.attributes["num"].value;
                node.setAttribute("opacity", num === n ? 1 : 0);
            });

        this._gotoPage(this._currentPage);

        this._renderPaginator();

        if (this._onRecordsPerPageChange) {
            var r = this._getRange(this._currentPage);
            this._onRecordsPerPageChange(this._recordsPerPage, this._currentPage, r.begin, r.end);
        }
    }

    _getRange(pnum) {
        var begin = (pnum - 1) * this._recordsPerPage;
        var end = begin + this._recordsPerPage - 1;
        return { begin: begin, end: end };
    }

    _validateCurrentPage() {
        if (this._currentPage > this._totalPages) {
            this._currentPage = this._totalPages;
            this._currCeiling = this._totalPages;
            this._currFloor = this._totalPages - 4;
        }
    }

    _resetBoundary() {
        this._currFloor = 1;
        this._currCeiling = this._totalPages <= 5 ? this._totalPages : 5;
    }
}
)});
  main.variable(observer("SVGTable")).define("SVGTable", ["Paginator","d3","Scrollbar"], function(Paginator,d3,Scrollbar){return(
class SVGTable {
    constructor(svg, container) {
        this._svg = svg;
        this._container = container || svg;
        this._g = null;
        this._charBox = { x: 0, y: 0, width: 0, height: 0 };

        this._autoSizeCell = true;
        this._defaultColumnWidth = 100;
        this._cellHeight = 24; // user setting
        this._cellHeightA = 24; // actual cell height = cellHeight + cellPaddingV * 2
        this._cellPaddingH = 10;
        this._cellPaddingV = 3;
        this._fixedColumns = 0;
        this._fixedRows = 0;

        this._left = 0;
        this._top = 0;
        this._width = 400;
        this._height = 300;
        this._widthA = 0;
        this._heightA = 0;
        this._sliderWidth = 13;
        this._sliderLength = 50;

        this._xf = 1; // horizontal content to scroll factor
        this._yf = 1; // vertical content to scroll factor
        this._minY = 0; // minimum y of the content can be scrolled
        this._fixedWidth = 0;
        this._fixedHeight = 0;

        this._data = null;
        this._fullData = null;
        this._dataIsArray = false;
        this._columns = null;
        this._defaultNumberFormat = "$,.2f";

        this._heatmap = false;
        this._heatmapPalette = null; // interpolator or array of colors
        this._heatmapColor = null;

        this._paginator = null;
        this._paginatorPos = "top";
        this._rowCount = 0;
        this._currPageNum = 0;
        this._rowsPerPage = 50;
        this._beginIndex = 0;
        this._endIndex = 49;
        this._rowsPerPageSelections = [25, 50, 75];

        this._scrollbar = {
            horizontal: null,
            vertical: null,
            visible: [true, true]
        };

        this._style = {
            border: true,
            borderColor: "#aaa",
            textColor: "black",
            background: "white",
            headerBackground: "#ddd",
            fixedBackground: "#eee",
            highlight: "cross", // none, cell, cross
            highlightBackground: "#fff3b0"
        };

        this._table = null;
        this._header = null;
        this._body = null;
        this._dataArea = null;
        this._dataHeader = null;

        this._focus = null;
        this._onsort = null;
        this._onchangepage = null;
        this._onhighlight = null;
        this._onclick = null;
        this._oncontextmenu = null;

        this._uniqueId = new String(Date.now() * Math.random()).replace(".", "");
    }

    defaultColumnWidth(_) {
        return arguments.length ? (this._defaultColumnWidth = +_, this) : this._defaultColumnWidth;
    }

    cellHeight(_) {
        return arguments.length ? (this._cellHeight = +_, this) : this._cellHeight;
    }

    cellPaddingH(_) {
        return arguments.length ? (this._cellPaddingH = +_, this) : this._cellPaddingH;
    }

    cellPaddingV(_) {
        return arguments.length ? (this._cellPaddingV = +_, this) : this._cellPaddingV;
    }

    autoSizeCell(_) {
        return arguments.length ? (this._autoSizeCell = _, this) : this._autoSizeCell;
    }

    fixedColumns(_) {
        return arguments.length ? (this._fixedColumns = +_, this) : this._fixedColumns;
    }

    fixedRows(_) {
        return arguments.length ? (this._fixedRows = +_, this) : this._fixedRows;
    }

    rowsPerPage(_) {
        return arguments.length ? (this._rowsPerPage = +_, this) : this._rowsPerPage;
    }

    rowsPerPageSelections(_) {
        return arguments.length ? (this._rowsPerPageSelections = _, this) : this._rowsPerPageSelections;
    }

    extent(_) {
        return arguments.length ? (
            this._left = +_[0][0], this._top = +_[0][1],
            this._width = +_[1][0], this._height = +_[1][1], this) : [[this._left, this._top], [this._width, this._height]];
    }

    size(_) {
        return arguments.length ? (this._width = +_[0], this._height = +_[1], this) : [this._width, this._height];
    }

    style(_) {
        return arguments.length ? (this._style = Object.assign(this._style, _), this) : this._style;
    }

    heatmap(_) {
        if (arguments.length) {
            this._heatmap = _;
            if (this._table) this._updateHeatmap();
            return this;
        }
        else
            return this._heatmap;
    }

    heatmapPalette(_) {
        if (arguments.length) {
            this._heatmapPalette = _;
            if (this._table) {
                this._processHeatmap();
                if (this._heatmap) this._updateHeatmap();
            }
            return this;
        }
        else
            return this._heatmapPalette;
    }

    data(_) {
        return arguments.length ? (this._data = _, this) : this._data;
    }

    columns(_) {
        if (arguments.length) {
            this._columns = _;
            return this;
        }
        else {
            if (!this._columns && this._data) this._processColumns();
            return this._columns;
        }
    }

    defaultNumberFormat(_) {
        return arguments.length ? (this._defaultNumberFormat = _, this) : this._defaultNumberFormat;
    }

    onsort(_) {
        return arguments.length ? (this._onsort = _, this) : this._onsort;
    }

    onchangepage(_) {
        return arguments.length ? (this._onchangepage = _, this) : this._onchangepage;
    }

    onhighlight(_) {
        return arguments.length ? (this._onhighlight = _, this) : this._onhighlight;
    }

    onclick(_) {
        return arguments.length ? (this._onclick = _, this) : this._onclick;
    }

    oncontextmenu(_) {
        return arguments.length ? (this._oncontextmenu = _, this) : this._oncontextmenu;
    }

    render() {
        if (!this._validate()) {
            // error
        }
        else {
            this._init();
            this._initPaginator();
            this._processColumns();
            this._prepare();

            this._calcConstrains();
            this._createClipPaths();

            this._processHeatmap();
            this._createTable();
            this._renderBody(this._table);
            this._renderHeader(this._table);
            this._addScrollbars();
            if (this._paginator) this._paginator.render();
        }
        return this;
    }

    getRowData(index) {
        return this._data[index];
    }

    getColumnData(index) {
        const c = this._columns[index];
        return this._data.map(_ => _[c.name]);
    }

    get g() { return this._g; }

    get svg() { return this._svg; }

    _init() {
        this._g = this._container.append("g");
        this._cellHeightA = this._cellHeight + this._cellPaddingV * 2;
        this._charBox = this._getBBox("Z");

        this._widthA = this._width;
        this._heightA = this._height;
    }

    _initPaginator() {
        if (this._data.length > this._rowsPerPage) {
            this._fullData = this._data;
            this._rowCount = this._fullData.length;
            this._data = this._fullData.slice(0, this._rowsPerPage);
            this._calcPageRange(1, 0);

            const pr = new Paginator(this);
            const ptop = this._top, ph = this._charBox.height + pr.buttonPadding() / 2 + 3; //3: margin
            this._top += ph;
            this._height -= ph;
            // bottom
            // this._height -= ph - 5;
            // ptop = this._height + this._top + 5;

            pr.init(this._rowsPerPage, this._rowCount)
                .options({
                    position: "top",
                    selector: "right",
                    buttonColor: this._style.headerBackground
                })
                .position([this._left, ptop])
                .recordsPerPageSelections(this._rowsPerPageSelections)
                .onPageNumberChange((pnum, begin, end) => {
                    this._currPageNum = pnum;
                    this._calcPageRange(pnum, begin);
                    this._pageData();
                    this._rerender();
                    if (this._onchangepage) this._onchangepage(this._beginIndex);
                })
                .onRecordsPerPageChange((rpp, pnum, begin, end) => {
                    this._rowsPerPage = rpp;
                    this._currPageNum = pnum;
                    this._calcPageRange(pnum, begin);
                    this._pageData();
                    this._rerender();
                    if (this._onchangepage) this._onchangepage(this._beginIndex);
                });

            this._paginator = pr;
        }
    }

    _calcPageRange(pnum, begin) {
        if (pnum === 1) this._beginIndex = this._fixedRows;
        else this._beginIndex = begin - (pnum - 2) * this._fixedRows;

        this._endIndex = this._beginIndex + this._rowsPerPage - this._fixedRows;
    }

    _pageData() {
        this._data = this._fullData.slice(0, this._fixedRows)
            .concat(this._fullData.slice(this._beginIndex, this._endIndex));
    }

    _rerender() {
        this._g.selectAll("clipPath").remove();
        if (this._table) this._table.remove();
        if (this._scrollbar.horizontal) this._scrollbar.horizontal.dispose();
        if (this._scrollbar.vertical) this._scrollbar.vertical.dispose();

        this._focus = null;
        this._height = this._heightA;
        this._width = this._widthA;
        this._scrollbar.visible = [true, true];

        const ph = this._charBox.height + this._paginator.buttonPadding() / 2;
        this._height -= ph;

        this._processColumns();
        this._prepare();

        this._calcConstrains();
        this._createClipPaths();

        this._createTable();
        this._renderBody(this._table);
        this._renderHeader(this._table);
        this._addScrollbars();
    }

    _validate() {
        return this._data && this._data.length > 0;
    }

    _prepare() {
        this._fixedHeight = this._cellHeightA * this._fixedRows + this._cellHeightA;

        const w = this._sumWidth();
        const h = this._data.length * this._cellHeightA;

        if (w + this._sliderWidth < this._width) {
            this._width = w;
            this._scrollbar.visible[0] = false;
        }
        else {
            this._width -= this._sliderWidth;
        }

        if (h + this._sliderWidth + this._cellHeightA < this._height) {
            this._height = h + this._cellHeightA; // includes header
            this._scrollbar.visible[1] = false;
        }
        else {
            this._height -= this._sliderWidth;
        }
    }

    _sumWidth(n) {
        // n === 0 : do not calculate, usually it is _fixedColumns = 0
        if (n === 0)
            return 0;
        else {
            // n === undefined : all columns
            const l = n || this._columns.length;
            var w = 0;
            for (let i = 0; i < l; i++) w += this._columns[i].width;
            return w;
        }
    }

    _processColumns() {
        if (this._data.length > 0 && this._data[0].length > 0) {
            this._dataIsArray = Array.isArray(this._data[0]);
        }

        if (!this._columns) {
            // CSV or JSON
            const keys = this._data.columns ? this._data.columns : Object.keys(this._data[0]);
            let x = 0;
            this._columns = keys.map((c, i) => {
                const isNumber = typeof this._data[0][c] === "number";
                const column = {
                    name: c,
                    isNumber: isNumber,
                    format: isNumber ? this._defaultNumberFormat : null,
                    order: 0, // 0: none, 1: ascending, 2: descending
                    x: x,
                    tx: x, // x for translate
                    index: i,
                    width: this._defaultColumnWidth
                }
                x += column.width;
                return column;
            });
        }
        else {
            let x = 0;
            this._columns.forEach((column, i) => {
                column.width = column.width || this._defaultColumnWidth;
                column.x = x;
                column.tx = x; // x for translate
                column.index = i;
                x += column.width;
            });
        }

        if (this._autoSizeCell) this._calcSize();

        this._fixedWidth = this._sumWidth(this._fixedColumns);
        for (let i = this._fixedColumns; i < this._columns.length; i++) {
            const c = this._columns[i];
            c.tx = c.x - this._fixedWidth; // x for translate
        }

        this._columns.resetOrder = (except) => this._columns.forEach(c => { if (except && c !== except || !except) c.order = 0; });
    }

    _calcSize() {
        // test if it is used in a generator
        if (this._charBox.width > 0 && this._charBox.height > 0) {

            // overrides cellHeight
            this._cellHeight = this._charBox.height;
            this._cellHeightA = this._charBox.height + this._cellPaddingV * 2;

            // prepare keys
            const keys = [];
            const longest = this._columns.map((column, i) => {
                if (this._dataIsArray) keys.push(i);
                else keys.push(column.name);
                return column.name;
            });

            // find the longest string for each column
            for (let i = 0; i < this._data.length; i++) {
                const row = this._data[i];
                for (let j = 0; j < keys.length; j++) {
                    const key = keys[j], column = this._columns[j];
                    const val = row[key];
                    if (val) {
                      const curr = column.isNumber && column.format ? d3.format(column.format)(row[key]) : row[key];
                      if (curr.length > longest[j].length) longest[j] = curr;
                    }
                }
            }

            // re-calculate column width for each column based on longest[]
            var x = 0;
            for (let i = 0; i < longest.length; i++) {
                const column = this._columns[i];
                column.x = column.tx = x;
                column.width = this._getBBox(longest[i]).width + this._cellPaddingH * 2 + 20;
                x += column.width;
            }
        }
    }

    _getBBox(str) {
        var t;
        try {
            t = this._svg.append("text").text(str);
            return t.node().getBBox();
        }
        finally {
            t.remove();
        }
    }

    _processHeatmap() {
        if (!this._heatmapPalette) return;

        const data = this._fullData || this._data;
        const all = data.slice(this._fixedRows).flatMap(d => {
            const r = this._dataIsArray ?
                d.slice(this._fixedColumns) :
                Object.keys(d).map(k => d[k]).slice(this._fixedColumns);

            const values = [];
            for (let i = 0; i < r.length; i++) {
                const col = this._columns[i + this._fixedColumns];
                if (col.isNumber) values.push(this._dataIsArray ? r[i] : r[col.name]);
            }
            return r;
        })

        const ext = d3.extent(all);
        const p = this._heatmapPalette;
        if (Array.isArray(p)) {
            // Palette is an array
            this._heatmapColor = d3.scaleSequential()
                .domain(this._series(ext[0], ext[1], p.length))
                .range(p);
        }
        else if (typeof p === "function") {
            // Palette is a color interpolator
            this._heatmapColor = d3.scaleSequential(p)
                .domain(ext);
        }
    }

    _series(min, max, num) {
        const n = num - 1, s = [min], intrv = max / n;
        var i = min;
        while (i < max && s.length < num) {
            i += intrv;
            s.push(i);
        }

        if (s.length < num)
            s.push(max);
        else
            s[s.length - 1] = max;

        return s;
    }

    _createClipPaths() {
        const addClipPath = (id, width, height, x, y) => {
            const cp = this._g.append("clipPath")
                .attr("id", `${id}.${this._uniqueId}`)
                .append("rect")
                .attr("width", width)
                .attr("height", height);

            if (x) cp.attr("x", x);
            if (y) cp.attr("y", y);
        }

        addClipPath("bodyClip", this._width, this._height);
        addClipPath("headerRowClip", this._width - this._fixedWidth, this._fixedHeight + 1, null, -1);
        this._columns.forEach((column, i) => {
            addClipPath("headerClip" + i, column.width - this._cellPaddingH, this._cellHeightA);
            if (column.isNumber)
                addClipPath("cellClip" + i, column.width - this._cellPaddingH, this._cellHeightA, -(column.width - this._cellPaddingH));
            else
                addClipPath("cellClip" + i, column.width - this._cellPaddingH, this._cellHeightA);
        })
    }

    _clipPath(id) {
        return `url(#${id}.${this._uniqueId})`;
    }

    _createTable() {
        // table container
        this._table = this._g.append("g")
            .attr("transform", `translate(${this._left},${this._top})`)
            .on("wheel", e => this._scroll(e))
            .on("mousewheel", e => this._scroll(e))
            .on("DOMMouseScroll", e => this._scroll(e));
    }

    _renderBody() {
        const that = this, style = this._style,
            highlight = style.highlight !== "none",
            cross = style.highlight === "cross";

        // table body container
        const bodyBox = this._table.append("g").attr("clip-path", this._clipPath("bodyClip"));
        // inner container of the table body, y is controlled by vertical scrollbar and its content is clipped by bodyClip  
        // it contains two parts: dataArea which is horizontally moveable and fixed columns on the left
        const body = bodyBox.append("g").attr("transform", `translate(0,${this._fixedHeight})`);
        // container of the moveable part of the body
        const dataArea = body.append("g")
            .attr("transform", `translate(${this._fixedWidth},0)`);

        const rows = this._data.slice(this._fixedRows);
        //if (this._dataIsArray) rows.forEach(r => r[0].origin = r);
        // moveable part of the body, x is controlled by horizontal scrollbar
        const cell = this._addRows(
            dataArea,
            "row",
            () => rows,
            (d, i) => this._columns.slice(this._fixedColumns).map((c, j) => {
                return {
                    rowIndex: i + this._fixedRows,
                    column: c,
                    value: this._dataIsArray ? d[c.index] : d[c.name]
                }
            }),
            (d, i) => `translate(0,${i * this._cellHeightA})`,
            d => `translate(${d.column.tx},0)`,
            g => this._addCell(g, style.background, this._fixedColumns))
            .on("click", click)
            .on("contextmenu", contextmenu)
            .on("mouseover", mouseover)
            .on("mouseleave", mouseleave);

        var fixedCell;
        if (this._fixedColumns) {
            // fixed columns on the left
            fixedCell = this._addRows(
                body.append("g"),
                "row",
                () => rows.map((r, i) => this._columns.slice(0, this._fixedColumns).map((c, j) => ({
                    origin: r, // for sort to get the index of data
                    rowIndex: i + this._fixedRows,
                    column: c,
                    value: this._dataIsArray ? r[c.index] : r[c.name]
                }))),
                d => d,
                (d, i) => `translate(0,${i * this._cellHeightA})`,
                d => `translate(${d.column.tx},0)`,
                g => this._addCell(g, style.fixedBackground, 0, false, true));
        }

        this._body = body;
        this._dataArea = dataArea;

        const test = cross ?
            (d, cell) => cell.rowIndex === d.rowIndex || cell.column.index === d.column.index :
            (d, cell) => cell.rowIndex === d.rowIndex && cell.column.index === d.column.index;

        d3.select("body").on(`keydown.eric.svgtable.${this._uniqueId}`, keypress);

        function keypress(e) {
            if (e.key === "Escape") that._focus = null;
        }

        function click(e, d) {
            if (that._focus !== d) {
                that._focus = null;
                mouseover(e, d);
                that._focus = d;
            }
            else
                that._focus = null;

            if (that._onclick) that._onclick(e, d);
        }

        function contextmenu(e, d) {
            if (that._oncontextmenu) {
                if (that._focus !== d) {
                    that._focus = null;
                    mouseover(e, d);
                    that._focus = d;
                    that._oncontextmenu(e, d);
                }
                return false;
            }
        }

        function mouseover(e, d) {
            if (!highlight || that._focus) return;

            const r = cell.select("rect")
                .datum(cell => test(d, cell) ? style.highlightBackground : that._cellColor(cell, style.background, false, false))
                .attr("fill", d => d);
            if (!that._style.border) r.attr("stroke", d => d);

            if (fixedCell) fixedCell.select("text").attr("font-weight", cell => cell.rowIndex === d.rowIndex ? "bold" : "");
            that._dataHeader.selectAll("text").attr("font-weight", cell => cell.column.index === d.column.index ? "bold" : "");

            if (that._onhighlight) {
                that._onhighlight(e, {
                    cell: d,
                    column: d.column,
                    getRow: () => that.getRowData(d.rowIndex),
                    getColumn: () => that.getColumnData(d.column.index)
                });
            }
        }

        function mouseleave() {
            if (!highlight || that._focus) return;

            const r = cell.select("rect").attr("fill", d => that._cellColor(d, style.background, false, false));
            if (!that._style.border) r.attr("stroke", d => that._cellColor(d, style.background, false, false));

            if (fixedCell) fixedCell.select("text").attr("font-weight", "");
            that._dataHeader.selectAll("text").attr("font-weight", "");
        }
    }

    _updateHeatmap() {
        const bg = this._style.background;
        const rects = this._dataArea.selectAll("rect");
        if (this._heatmap) {
            rects.attr("fill", d => this._cellColor(d, bg, false, false));
            if (!this._style.border) rects.attr("stroke", d => this._cellColor(d, bg, false, false));
        }
        else {
            rects.attr("fill", d => bg);
            if (!this._style.border) rects.attr("stroke", bg);
        }
    }

    _renderHeader(g) {
        const style = this._style;

        // fixed rows sliced from this._data
        const rows = this._data.slice(0, this._fixedRows);
        // header container
        const header = g.append("g");
        // top-left cells which are always fixed if fixedColumns is specified
        header.selectAll(".column")
            // Unify the the data structure make it compatible with addCell
            .data(this._columns.slice(0, this._fixedColumns).map((d, i) => ({
                column: d
            })))
            .join("g")
            .attr("class", "column")
            .attr("transform", d => `translate(${d.column.tx},0)`)
            .call(g => this._addCell(g, style.headerBackground, 0, true, true))
            .on("click", (e, d) => this._sort(d));

        // fixed data cells in the fixed columns section
        if (this._fixedColumns) {
            this._addRows(
                header,
                "fixedRow",
                () => rows.map((r, i) => this._columns.slice(0, this._fixedColumns).map((c, j) => ({
                    rowIndex: i,
                    column: c,
                    value: this._dataIsArray ? r[c.index] : r[c.name]
                }))),
                d => d,
                (d, i) => `translate(0,${(i + 1) * this._cellHeightA})`,
                d => `translate(${d.column.tx},0)`,
                g => this._addCell(g, style.fixedBackground, 0, false, true));
        }

        // the container of the rest of the header cells, its content is clipped by headerClip
        const headerBox = header.append("g")
            .attr("clip-path", this._clipPath("headerRowClip"))
            .attr("transform", `translate(${this._fixedWidth},0)`);

        // horizontally moveable part of the header, x is controlled by and synchronized with horizontal scrollbar
        const dataHeader = headerBox.append("g");
        dataHeader.selectAll(".column")
            // Unify the the data structure make it compatible with addCell
            .data(this._columns.slice(this._fixedColumns).map((d, i) => ({
                column: d
            })))
            .join("g")
            .attr("class", "column")
            .attr("transform", d => `translate(${d.column.tx},0)`)
            .call(g => this._addCell(g, style.headerBackground, this._fixedColumns, true, true))
            .on("click", (e, d) => this._sort(d));

        this._addRows(
            dataHeader,
            "fixedRow",
            () => rows,
            (d, i) => this._columns.slice(this._fixedColumns).map((c, j) => {
                return {
                    rowIndex: i,
                    column: c,
                    value: this._dataIsArray ? d[c.index] : d[c.name]
                }
            }),
            (d, i) => `translate(0,${(i + 1) * this._cellHeightA})`,
            d => `translate(${d.column.tx},0)`,
            g => this._addCell(g, style.fixedBackground, this._fixedColumns, false, true)
        );

        // a fixed line for seperating header and body
        g.append("line")
            .attr("stroke", style.borderColor)
            .attr("x1", 0)
            .attr("y1", this._cellHeightA)
            .attr("x2", this._width)
            .attr("y2", this._cellHeightA);

        this._header = header;
        this._dataHeader = dataHeader;
    }

    _sort(d) {
        const sorted = this._sortData(d.column);

        if (this._paginator && this._fullData.length > this._rowsPerPage) {
            const x = this._getX(), y = this._getY();
            this._pageData();
            this._rerender();
            this._moveX(x);
            this._moveY(y);
            if (this._onsort) this._onsort(d.column, this._paginator !== null);
        }
        else {
            const f = 250 / sorted.length;
            this._table.selectAll(".row")
                .transition()
                .duration((d, i) => i * f)
                .ease(d3.easeBounce)
                .attr("transform", d => {
                    const i = Array.isArray(d) && d[0].origin !== undefined ? sorted.indexOf(d[0].origin) : sorted.indexOf(d);
                    return `translate(0,${i * this._cellHeightA})`;
                });
        }

        const cg = this._header.selectAll(".column");
        cg.select(".asc").attr("fill", _ => d.column === _.column && d.column.order === 1 ? "#777" : "#bbb");
        cg.select(".desc").attr("fill", _ => d.column === _.column && d.column.order === 2 ? "#777" : "#bbb");
    }

    _sortData(column) {
        //var sorted = [...this._data].slice(this._fixedRows);
        var fixed, sorted;
        if (this._paginator) {
            if (this._fixedRows > 0) {
                fixed = this._fullData.slice(0, this._fixedRows);
                sorted = this._fullData.slice(this._fixedRows);
            }
            else
                sorted = this._fullData;
        }
        else {
            sorted = [...this._data].slice(this._fixedRows);
        }

        this._columns.resetOrder(column);
        if (column.order === 0)
            column.order = 1;
        else if (column.order === 1)
            column.order = 2;
        else
            column.order = 1;

        const index = this._dataIsArray ? column.index : column.name;

        if (column.order === 0) {
            sorted.sort((a, b) => -1);
        }
        else if (column.isNumber) {
            if (column.order === 1)
                sorted.sort((a, b) => a[index] - b[index]);
            else
                sorted.sort((a, b) => b[index] - a[index]);
        }
        else {
            if (column.order === 1)
                sorted.sort((a, b) => a[index].localeCompare(b[index]));
            else
                sorted.sort((a, b) => b[index].localeCompare(a[index]));
        }

        if (fixed) this._fullData = fixed.concat(sorted);

        return sorted;
    }

    // rows: data function for rows
    // columns: data function for columns
    // rt: row translate function
    // ct: column translate function
    // cell: cell function
    _addRows(g, className, rows, columns, rt, ct, cell) {
        return g.selectAll("." + className)
            .data(rows)
            .join("g")
            .attr("class", className)
            .attr("transform", rt)
            .selectAll(".cell")
            .data(columns)
            .join("g")
            .attr("class", "cell")
            .attr("transform", ct)
            .call(cell)
    }

    // base: number of fixed cells on the same row
    _addCell(g, fill, base, isHeader, isFixed) {
        const style = this._style;

        const rect = g.append("rect")
            .attr("width", d => d.column.width)
            .attr("height", this._cellHeightA)
            .attr("fill", d => this._cellColor(d, fill, isHeader, isFixed))
            .attr("stroke-width", 0.1)
            .attr("stroke", style.border ? style.borderColor : fill);

        if (this._heatmap && !(isHeader || isFixed)) rect.attr("opacity", 0.5);

        const t = g.append("text").attr("y", "1em").attr("dy", this._cellPaddingV).attr("fill", style.textColor);

        if (isHeader) {
            if (!style.border)
                g.append("line")
                    .attr("x1", d => d.column.width - 1).attr("y1", 5)
                    .attr("x2", d => d.column.width - 1).attr("y2", this._cellHeightA - 5)
                    .attr("stroke", style.borderColor);

            this._arrow(g, base, "asc", "M 0 8 L 3 4 L 6 8");
            this._arrow(g, base, "desc", "M 0 11 L 3 15 L 6 11");

            // Header cell
            t.attr("dx", this._cellPaddingH)
                .attr("clip-path", d => this._clipPath(`headerClip${d.column.index}`))
                .text(d => d.column.name);
        }
        else {
            t.attr("class", "value")
                .attr("dx", d => d.column.isNumber ? -this._cellPaddingH : this._cellPaddingH)
                .attr("clip-path", d => this._clipPath(`cellClip${d.column.index}`))
                .attr("transform", d => `translate(${d.column.isNumber ? d.column.width : 0},0)`)
                .attr("text-anchor", d => d.column.isNumber ? "end" : "start")
                .text(d => {
                    if (d.column.isNumber && d.column.format)
                        return d3.format(d.column.format)(d.value);
                    else
                        return d.value;
                });
        }
    }

    _cellColor(d, fill, isHeader, isFixed) {
        if (this._heatmap) {
            if (isHeader || isFixed || !d.column.isNumber)
                return fill;
            else
                return this._heatmapColor(d.value);
        }
        else
            return fill;
    }

    _arrow(g, base, name, path) {
        g.append("path")
            .attr("class", name)
            .attr("d", path)
            .attr("fill", "#bbb")
            .attr("transform", d => `translate(${d.column.width - this._cellPaddingH - 10},2)`);
    }

    _addScrollbars() {
        if (this._scrollbar.visible[1]) this._addVScroll();
        if (this._scrollbar.visible[0]) this._addHScroll();
    }

    _addVScroll() {
        const sb = this._scrollbar.vertical = new Scrollbar(this._svg);
        sb.position(this._left + this._width, this._top + this._fixedHeight, this._height - this._fixedHeight)
            .sliderWidth(this._sliderWidth)
            .sliderLength(this._sliderLength)
            .onscroll((y, sy, delta) => this._body.attr("transform", `translate(0,${-sy * this._yf + this._fixedHeight})`))
            .attach();
    }

    _addHScroll() {
        const sb = this._scrollbar.horizontal = new Scrollbar(this._svg);
        sb.vertical(false)
            .position(this._left + this._fixedWidth, this._top + this._height, this._width - this._fixedWidth)
            .sliderWidth(this._sliderWidth)
            .sliderLength(this._sliderLength)
            .onscroll((x, sx, delta) => {
                this._dataArea.attr("transform", `translate(${-sx * this._xf + this._fixedWidth},0)`);
                this._dataHeader.attr("transform", `translate(${-sx * this._xf},0)`);
            })
            .attach();
    }

    _calcConstrains() {
        // f for both scrollbars = (total - visible) / (visible - slider length)    
        // Vertical scrollbar constrain        
        const th = (this._data.length - this._fixedRows) * this._cellHeightA,
            sh = this._height - this._fixedHeight;
        this._yf = (th - sh) / (sh - this._sliderLength);

        // Horizontal scrollbar constrain
        const tw = this._sumWidth() - this._sumWidth(this._fixedColumns),
            sw = this._width - this._sumWidth(this._fixedColumns);
        this._xf = (tw - sw) / (sw - this._sliderLength);

        this._minX = -(tw - this._width);
        this._minY = -((this._data.length - this._fixedRows) * this._cellHeightA - this._height);
    }

    _scroll(e) {
        if (this._scrollbar.vertical) {
            const dy = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta ? e.wheelDelta : -1;
            if (dy === -1) return;

            const cy = this._getY();
            var y = cy + dy;
            this._moveY(y);
        }

        if (this._scrollbar.horizontal) {
            const dx = e.wheelDeltaX;
            if (dx) {
                const cx = this._getX();
                var x = cx + dx;
                this._moveX(x);
            }
        }
        e.preventDefault();
    }

    _getX() { return +this._dataArea.attr("transform").split(",")[0].substring(10); }
    _getY() { return +this._body.attr("transform").split(",")[1].replace(")", ""); }

    _moveX(x) {
        if (x > this._fixedWidth) x = this._fixedWidth;
        else if (x < this._minX) x = this._minX;

        this._dataArea.attr("transform", `translate(${x},0)`);
        this._dataHeader.attr("transform", `translate(${x - this._fixedWidth},0)`);
        if (this._scrollbar.horizontal)
            this._scrollbar.horizontal.moveSlider(-((x - this._fixedWidth) / this._xf));
    }

    _moveY(y) {
        if (y < this._minY) y = this._minY;
        else if (y > this._fixedHeight) y = this._fixedHeight;

        this._body.attr("transform", `translate(0,${y})`);
        if (this._scrollbar.vertical)
            this._scrollbar.vertical.moveSlider(-(y - this._fixedHeight) / this._yf);
    }
}
)});
  main.variable(observer("Scrollbar")).define("Scrollbar", ["d3"], function(d3){return(
class Scrollbar {
    constructor(svg) {
        this._svg = svg;
        this._g = null;
        this._box = null;
        this._vertical = true;
        this._bar = null;
        this._slider = null;

        this._sliderWidth = 13;
        this._sliderLength = 50;

        this._sliderTimer = null;
        this._sliderTimeout = 300;
        this._sliderSteps = null;

        this._grabbing = false;
        this._delta = 0;
        this._deltac = 0;

        this._onscroll = null;
        this._namespace = `eric.scrollbar.${Date.now() * Math.random()}`;
    }

    vertical(_) {
        return arguments.length ? (this._vertical = _, this) : this._vertical;
    }

    sliderWidth(_) {
        return arguments.length ? (this._sliderWidth = _, this) : this._sliderWidth;
    }

    sliderLength(_) {
        return arguments.length ? (this._sliderLength = _, this) : this._sliderLength;
    }

    position(x, y, length) {
        return arguments.length ? (this._box = { x, y, length }, this) : this._box;
    }

    onscroll(_) {
        return arguments.length ? (this._onscroll = _, this) : this._onscroll;
    }

    attach() {
        this._render();
        this._attachEvents();
    }

    dispose() {
        if (this._g) this._g.remove();
        d3.select("body")
            .on(`mousedown.${this._namespace}`, null)
            .on(`mouseup.${this._namespace}`, null)
            .on(`mousemove.${this._namespace}`, null);
    }

    moveSlider(pos) {
        if (pos < 0)
            pos = 0;
        else if (pos + this._sliderLength > this._box.length)
            pos = this._box.length - this._sliderLength;

        this._slider.attr(this._vertical ? "y" : "x", pos);
    }

    _render() {
        if (this._vertical)
            this._renderVBar();
        else
            this._renderHBar();
    }

    _renderVBar() {
        const box = this._box;

        const g = this._svg.append("g")
            .attr("transform", `translate(${box.x},${box.y})`);

        this._bar = g.append("rect")
            .attr("width", this._sliderWidth)
            .attr("height", box.length)
            .attr("fill", "#eee");

        this._slider = g.append("rect")
            .attr("x", 0).attr("y", 0)
            .attr("width", this._sliderWidth)
            .attr("height", this._sliderLength)
            .attr("fill", "#ccc");

        this._g = g;
    }

    _renderHBar() {
        const box = this._box;

        const g = this._svg.append("g")
            .attr("transform", `translate(${box.x},${box.y})`);

        this._bar = g.append("rect")
            .attr("width", box.length)
            .attr("height", this._sliderWidth)
            .attr("fill", "#eee");

        this._slider = g.append("rect")
            .attr("x", 0).attr("y", 0)
            .attr("width", this._sliderLength)
            .attr("height", this._sliderWidth)
            .attr("fill", "#ccc");

        this._g = g;
    }

    _attachEvents(tbox) {
        const box = this._box;

        //this._svg
        d3.select("body")
            .on(`mousedown.${this._namespace}`, e => {
                if (e.buttons === 1) {
                    const p = d3.pointer(e);
                    if (e.srcElement === this._slider.node()) {
                        this._grabbing = true;
                        this._slider.attr("fill", "#aaa");
                        if (this._vertical) {
                            this._delta = p[1] - +this._slider.attr("y");
                            this._deltac = p[1] - +this._slider.attr("y") - this._sliderLength / 2;
                        }
                        else {
                            this._delta = p[0] - +this._slider.attr("x");
                            this._deltac = p[0] - +this._slider.attr("x") - this._sliderWidth / 2;
                        }
                        e.stopPropagation();
                    }
                    else if (e.srcElement === this._bar.node()) {
                        const cbox = this._bar.node().getBoundingClientRect();

                        var a, b, pos;
                        if (this._vertical) {
                            a = pos = +this._slider.attr("y");
                            b = p[1] - cbox.y;
                        }
                        else {
                            a = pos = +this._slider.attr("x");
                            b = p[0] - cbox.x;
                        }

                        const intr = (b - a) / 4;
                        const steps = [];
                        for (var i = 0; i < 3; i++) {
                            pos += intr;
                            steps.push(pos);
                        }

                        if (b + this._sliderLength > this._box.length)
                            steps.push(this._box.length - this._sliderLength);
                        else
                            steps.push(b);

                        this._sliderSteps = steps.reverse();
                        this._sliderTimeout = 200;
                        this._sliderTimer = setTimeout(() => this._slide(), this._sliderTimeout);
                        e.stopPropagation();
                    }
                }
            })
            .on(`mouseup.${this._namespace}`, () => {
                if (this._sliderTimer) clearTimeout(this._sliderTimer);
                const steps = this._sliderSteps;
                if (steps && steps.length > 0) {
                    this._slideTo(steps.reverse().pop());
                    this._sliderSteps = null;
                }

                this._grabbing = false;
                this._slider.attr("fill", "#ccc");
            })
            .on(`mousemove.${this._namespace}`, e => {
                const box = this._box;

                if (this._grabbing) {
                    if (this._vertical) {
                        const y = d3.pointer(e)[1];
                        const sy = y - this._delta;
                        if (sy >= 0 && sy <= box.length - this._sliderLength) {
                            this._slider.attr("y", sy);
                            if (this._onscroll) this._onscroll(y, sy, this._deltac);
                        }
                    }
                    else {
                        const x = d3.pointer(e)[0];
                        const sx = x - this._delta;
                        if (sx >= 0 && sx <= box.length - this._sliderLength) {
                            this._slider.attr("x", sx);
                            if (this._onscroll) this._onscroll(x, sx, this._deltac);
                        }
                    }
                }
            });
    }

    _slideTo(dest) {
        this._slider.attr(this._vertical ? "y" : "x", dest);
        if (this._onscroll) this._onscroll(dest, dest, 0);
    }

    _slide() {
        this._slideTo(this._sliderSteps.pop());
        if (this._sliderSteps.length > 0) {
            this._sliderTimeout -= 50;
            this._sliderTimer = setTimeout(() => this._slide(), this._sliderTimeout);
        }
        else
            this._sliderTimer = null;
    }
}
)});
  main.variable(observer("FunnelChart")).define("FunnelChart", ["d3"], function(d3){return(
class FunnelChart {
    constructor(container) {
        this._container = container;

        // Groups
        this._g = null;

        // Visual elements and selections
        this._infoBox = null;
        this._textBox = null;
        this._charBox = null;

        // Base variables and constants        
        this._width = 0;         
        this._height = 0;
        this._offset = 25;
        this._hw = 0;
        this._funnelWidth = { max: 0, min: 0 };

        // Scales
        this._y = null;
        this._color = null;

        // Data
        this._data = null;
        this._chartData = null;
        this._total = 0;
        this._streamlined = true;

        // Options
        this._options = {
            palette: d3.schemeTableau10,
            style: "3d", // 2d, 3d
            streamlined: true,
            percentage: "first", // first, previous
            showPercentage: true
        };

        // Font
        this._font = {
            fontFamily: "sans-serif",
            size: {
                label: 14,
                value: 12,
                percentage: 9
            }
        }

        this._field = {
            stage: "stage",
            value: "value"
        };

        this._tooltip = {
            color: "black",
            boxColor: "white",
            boxOpacity: 0.8,
            formatter: null
        };        
        
        // events
        this._onhover = null;
        this._onclick = null;
    }

    size(_) {
        return arguments.length ? (this._width = _[0], this._height = _[1], this) : [this._width, this._height];
    }

    options(_) {
        return arguments.length ? (this._options = Object.assign(this._options, _), this) : this._options;
    }

    font(_) {
        return arguments.length ? (this._font = Object.assign(this._font, _), this) : this._font;
    }

    field(_) {
        return arguments.length ? (this._field = Object.assign(this._field, _), this) : this._field;
    }

    tooltip(_) {
        return arguments.length ? (this._tooltip = Object.assign(this._tooltip, _), this) : this._tooltip;
    }

    data(_) {
        return arguments.length ? (this._data = [..._], this) : this._data;
    }

    onhover(_) {
        return arguments.length ? (this._onhover = _, this) : this._onhover;
    }

    onclick(_) {
        return arguments.length ? (this._onclick = _, this) : this._onclick;
    }

    render() {
        this._init();
        this._process();
        this._initScales();
        this._render();
        return this;
    }

    _init() {
        this._streamlined = this._options.streamlined;

        this._hw = this._width / 2;
        this._funnelWidth.max = this._width * 0.65;

        const ext = this._data.map(d => d.value);
        if (this._streamlined)
            this._funnelWidth.min = this._width * 0.15;
        else {
            this._funnelWidth.min = this._funnelWidth.max * ext[ext.length - 1] / ext[0];
        }

        this._textBox = this._container
            .append("text")
            .attr("font-family", this._font.fontFamily)
            .style("visibility", "hidden");
        this._getCharBox();
    }

    _process() {
        if (this._streamlined) {
            this._processStreamlined();
        }
        else {
            this._processPartToWhole();
        }
    }

    _processStreamlined() {
        this._chartData = [];
        this._data.sort((a, b) => +b[this._field.value] - +a[this._field.value]);

        for (let i = 1; i < this._data.length; i++) {
            const
                d = this._data[i],
                value = +d[this._field.value];

            let denominator = 1;
            if (this._options.percentage === "first")
                denominator = +this._data[0][this._field.value];
            else if (this._options.percentage === "previous")
                denominator = i === 0 ? value : +this._data[i - 1][this._field.value];

            this._chartData.push({
                stage: d[this._field.stage],
                value: value,
                vs: +this._data[i - 1].value,
                ve: value,
                pct: value / denominator
            });
        }
    }

    _processPartToWhole() {
        let t = 0;
        this._chartData = this._data.map((d, i) => {
            const
                vs = t,
                value = +d[this._field.value];

            t += value;
            return {
                stage: d[this._field.stage],
                value: value,
                vs: vs,
                ve: t,
                pct: 0
            };
        });

        this._total = t;
        this._chartData.forEach(d => d.pct = d.value / t);
    }

    _initScales() {
        this._y = d3.scaleLinear().range([this._streamlined ? 30 : 0, this._height]);
        if (this._streamlined)
            this._y.domain(d3.extent(this._data.map(d => +d[this._field.value])).reverse());                        
        else
            this._y.domain([0, this._total]);            

        this._color = d3.scaleOrdinal()
            .domain(this._chartData.map(d => d.stage))
            .range(this._options.palette);
    }

    _render() {
        this._g = this._container
            .append("g")
            .attr("font-family", this._font.fontFamily);

        this._renderLabels();
        if (this._options.style === "3d")
            this._renderFunnel2();            
        else
            this._renderFunnel1();
    }

    _renderLabels() {        
        const offset = this._options.style === "3d" ? 5 : 1;

        if (this._streamlined) {
            const first = this._data[0];
            this._g.append("text")
                .attr("text-anchor", "middle")                
                .attr("font-size", this._font.size.label)
                .attr("font-weight", "bold")
                .attr("fill", "#666")
                .attr("x", this._width / 2)
                .attr("y", 25)                
                .text(`${first[this._field.stage]} = ${d3.format(".3s")(first[this._field.value])}`);
        }

        const labels = this._g
            .selectAll("label")
            .data(this._chartData)
            .join("g")
            .attr("class", "label")
            .attr("font-size", this._font.size.label)
            .attr("font-weight", "bold")
            .attr("fill", "#666")
            .call(g => {
                const line = g
                    .append("line")
                    .attr("stroke", "#666")
                    .attr("stroke-dasharray", "1,2");

                if (this._streamlined) {
                    line
                        .attr("x1", 0).attr("y1", d => this._y(d.ve) - offset)
                        .attr("x2", this._hw).attr("y2", d => this._y(d.ve) - offset);
                }
                else {                    
                    line
                        .attr("x1", 0).attr("y1", d => this._y(d.vs + d.value * 0.75))
                        .attr("x2", this._hw).attr("y2", d => this._y(d.vs + d.value * 0.75));
                }

                g
                    .append("text")
                    .attr("x", 0)
                    .attr("y", d => this._y(this._streamlined ? d.ve : d.vs + d.value * 0.75) - offset)
                    .attr("dy", "-0.2em")
                    .text(d => d.stage)
            });

        this._attachEvents(labels);
    }

    _renderLayers(layer, shadow) {
        return this._g
            .selectAll("layer")
            .data(this._chartData)
            .join("g")
            .attr("class", "layer")
            .call(g => {
                g
                    .append("path")
                    .attr("fill", d => this._color(d.stage))
                    .attr("d", layer)
            })
            .call(g => {
                g
                    .append("path")
                    .attr("fill", d => d3.color(this._color(d.stage)).darker(0.5))
                    .attr("d", shadow)
            });
    }

    _renderNumbers(target, t) {        
        target.call(g => {
            g
                .append("text")
                .attr("fill", "white")
                .attr("font-size", this._font.size.value)
                .attr("font-weight", "bold")
                .attr("text-anchor", "middle")
                .attr("transform", t)
                .text(d => d3.format(".3s")(d.value));

            if (this._options.showPercentage) {
                g
                    .append("text")
                    .attr("fill", "white")
                    .attr("font-size", this._font.size.percentage)
                    .attr("text-anchor", "middle")
                    .attr("transform", t)
                    .attr("dy", "1em")
                    .text(d => d3.format(".1%")(d.pct));
            }
        });
    }

    _renderFunnel1() {
        const
            that = this,
            { left, right } = this._getLinearEquationSet1();

        const layers = this._renderLayers(layer, shadow);
        this._renderNumbers(
            layers,
            d => {
                if (this._streamlined) {
                    const y1 = this._y(d.vs), y2 = this._y(d.ve);
                    return `translate(${this._hw},${y1 + (y2 - y1) / 2})`;
                }
                else {
                    return `translate(${this._hw},${this._y(d.vs + d.value / 2)})`;
                }
            }   
        );

        if (this._options.style === "2d") {
            layers.attr("transform", (d, i) => {
                return `translate(${i % 2 === 0 ? -5 : 5},0)`;
            });
        }

        this._attachEvents(layers);

        function layer(d) {
            const
                y0 = that._y(d.vs), y1 = that._y(d.ve),
                x00 = left(y0), x01 = right(y0),
                x10 = left(y1), x11 = right(y1);

            return `M${x00},${y0}L${x01},${y0}L${x11},${y1}L${x10},${y1}L${x00},${y0}`;
        }

        function shadow(d, i) {
            if (i > 0 && that._options.style === "2d") {
                const
                    y0 = that._y(d.vs),
                    y1 = that._streamlined ? that._y(d.vs) + (that._y(d.ve) - that._y(d.vs)) / 5 : that._y(d.vs + d.value / 5),
                    w = (that._hw - left(y0)) * 1.5, // 2 * 0.75
                    x00 = i % 2 === 0 ? right(y0) : left(y0), x01 = i % 2 === 0 ? x00 - w : x00 + w,
                    x10 = i % 2 === 0 ? right(y1) : left(y1);

                return `M${x00},${y0}L${x10},${y1}L${x01},${y0}L${x00},${y0}`;
            }
        }
    }

    _getLinearEquationSet1() {
        const left = this._x(
            (this._width - this._funnelWidth.max) / 2, 0,
            (this._width - this._funnelWidth.min) / 2, this._height
        );
        const right = this._x(
            (this._width - this._funnelWidth.max) / 2 + this._funnelWidth.max, 0,
            (this._width - this._funnelWidth.min) / 2 + this._funnelWidth.min, this._height,
        );

        return { left, right };
    }

    _renderFunnel2() {
        const
            that = this,            
            { pa, pc, xb, xt } = this._getLinearEquationSet2();

        const layers =
            this._renderLayers(layer, shadow)
                .call(g => {
                    g
                        .append("path")
                        .attr("fill", d => d3.color(this._color(d.stage)).darker(0.7))
                        .attr("d", bottom)
                });

        const
            x1 = (this._width - this._funnelWidth.max * 1 / 3) / 2, y1 = 0,
            x2 = (this._width - this._funnelWidth.max) / 2 + this._funnelWidth.max, y2 = this._offset,
            a = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        this._renderNumbers(
            layers,
            d => {
                if (this._streamlined) {
                    const
                        y1 = this._y(d.vs), y2 = this._y(d.ve),
                        py = y1 + (y2 - y1) / 2, px = xt(py);
                    return `translate(${px},${py}) skewY(${a})`;
                }
                else {
                    const py = this._y(d.vs + d.value / 2), px = xt(py);
                    return `translate(${px},${py}) skewY(${a})`;
                }
            }
        );

        this._attachEvents(layers);

        function layer(d) {
            const
                ys = that._y(d.vs), ye = that._y(d.ve) - 10,
                y00 = ys, y01 = ye, x00 = xb(y00), x01 = xb(y01),
                p0 = pc(ys), p1 = pc(ye);

            return `M${x00},${y00}L${p0.x},${p0.y}L${p1.x},${p1.y}L${x01},${y01}L${x00},${y00}`;
        }

        function shadow(d) {
            const
                ys = that._y(d.vs), ye = that._y(d.ve) - 10,
                y00 = ys, y01 = ye, x00 = xb(y00), x01 = xb(y01),
                p0 = pa(ys), p1 = pa(ye);

            return `M${x00},${y00}L${p0.x},${p0.y}L${p1.x},${p1.y}L${x01},${y01}L${x00},${y00}`;
        }

        function bottom(d) {
            const
                y = that._y(d.ve) - 10,
                y00 = y, x00 = xb(y00),
                p0 = pa(y), p1 = pc(y);

            return `M${x00},${y00}L${p0.x},${p0.y}L${p1.x},${p1.y}L${x00},${y00}`;
        }
    }

    _getLinearEquationSet2() {
        const mb = (x1, y1, x2, y2) => {
            const m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
            return { m, b };
        };

        // Second line
        const xb = y => {
            const
                x1 = (this._width - this._funnelWidth.max * 1 / 3) / 2, y1 = 0,
                x2 = (this._width - this._funnelWidth.min) / 2 * 1.05, y2 = this._height;
            return this._x(x1, y1, x2, y2)(y);
        };

        // Text line
        const xt = y => {
            const
                xa = (this._width - this._funnelWidth.max * 1 / 3) / 2,
                xb = (this._width - this._funnelWidth.max) / 2 + this._funnelWidth.max,
                x1 = xa + (xb - xa) / 2, y1 = 0;
            const
                xc = (this._width - this._funnelWidth.min) / 2 * 1.05,
                xd = (this._width - this._funnelWidth.min) / 2 + this._funnelWidth.min,
                x2 = xc + (xd - xc) / 2, y2 = this._height;
            return this._x(x1, y1, x2, y2)(y);
        };

        const p = (x11, x12, x22, y) => {
            // Line 1
            const y11 = 0, y12 = this._height;
            // Line 2
            const x21 = xb(y), y21 = y, y22 = y21 + this._offset;

            const
                l1 = mb(x11, y11, x12, y12),
                l2 = mb(x21, y21, x22, y22);

            const
                px = (l2.b - l1.b) / (l1.m - l2.m),
                py = l1.m * px + l1.b;

            return { x: px, y: py };
        }

        // Left line
        const pa = y => p(
            (this._width - this._funnelWidth.max) / 2,
            (this._width - this._funnelWidth.min) / 2,
            (this._width - this._funnelWidth.max) / 2,
            y);

        // Right line
        const pc = y => p(
            (this._width - this._funnelWidth.max) / 2 + this._funnelWidth.max,
            (this._width - this._funnelWidth.min) / 2 + this._funnelWidth.min,
            (this._width - this._funnelWidth.max) / 2 + this._funnelWidth.max,
            y);        

        return { pa, pc, xb, xt };
    }

    _x(x1, y1, x2, y2) {
        const
            m = (y2 - y1) / (x2 - x1),
            b = y1 - m * x1;

        return y => (y - b) / m;
    }

    _attachEvents(target) {
        target
            .on("pointerenter", (e, d) => {
                this._showTooltip(e, d);
                if (this._onhover) this._onhover(d);
            })
            .on("pointermove", (e, d) => {
                this._moveTooltip(e);
            })
            .on("pointerleave", () => {
                this._hideTooltip();
            });
    }

    _showTooltip(e, d) {
        const info = [d.stage, d3.format(",")(d.value), d3.format(".2%")(d.pct)];

        var max = 0;
        info.forEach(s => {
            const l = this._calcTextLength(s);
            if (l > max) max = l;
        })

        if (!this._infoBox)
            this._infoBox = this._g
                .append("g")
                .attr("fill", this._tooltip.color)
                .call(g => g.append("rect")
                    .attr("class", "ibbg")
                    .attr("opacity", this._tooltip.boxOpacity)
                    .attr("stroke", "#aaa")
                    .attr("stroke-width", 0.5)
                    .attr("rx", 4).attr("ry", 4)
                    .attr("x", -5).attr("y", -5)
                    .attr("fill", this._tooltip.boxColor));

        const spacing = 1.1;
        this._infoBox
            .style("visibility", "visible")
            .select(".ibbg")
            .attr("width", max + 20).attr("height", spacing * this._charBox.height * info.length + 5);

        this._infoBox
            .selectAll("text")
            .data(info)
            .join(
                enter => {
                    enter
                        .append("text")
                        .attr("dy", (d, i) => `${spacing * i + 1}em`)
                        .attr("font-weight", (d, i) => i === 0 ? "bold" : "")
                        .text(d => d);
                },
                update => update.text(d => d),
                exit => exit.remove()
        );

        this._moveTooltip(e);
    }

    _getSVG() {
        let curr = this._container.node();
        while (curr && curr.tagName !== "svg")
            curr = curr.parentElement;
        return curr;
    }

    _moveTooltip(e) {
        const svg = this._getSVG();
        if (svg) {
            // convert to SVG coordinates
            const
                p = svg.createSVGPoint(),
                box = this._infoBox.node().getBBox(),
                gr = this._g.node().getBoundingClientRect();
            p.x = e.clientX;
            p.y = e.clientY;
            const converted = p.matrixTransform(this._g.node().getScreenCTM().inverse());

            const
                left = converted.x + box.width + gr.left > this._width ? converted.x - box.width : converted.x,
                top = converted.y + box.height + gr.top > this._height ? converted.y - box.height : converted.y;

            this._infoBox.attr("transform", `translate(${left + 10},${top + 10})`);
        }
    }

    _hideTooltip(d) {
        if (this._infoBox) this._infoBox.style("visibility", "hidden");
    }

    _calcTextLength(text) {
        return this._textBox.text(text).node().getBBox().width;
    }

    _getCharBox() {
        this._charBox = this._textBox.text("M").node().getBBox();
    }
}
)});
  main.variable(observer("RingChart")).define("RingChart", ["d3"], function(d3){return(
class RingChart {
    constructor(container) {
        this._container = container;

        this._width = 0;
        this._height = 0;
        this._diameter = 0;
        this._radius = {
            inner: 50,
            outer: 0,
            node: 0,
            max: 0
        };

        this._palette = d3.schemeTableau10;

        // options
        this._options = {
            order: "asc",
            nodeStyle: "arc",
            chartType: "rankmap",
            clickAction: "highlight",
            stickyNodes: true,
            showZeros: true,
            alwaysShowLines: false,
            fixedNodeRadius: 0
        };

        this._legend = {
            enabled: true,
            centered: true,
            fontSize: "9pt",
            format: ".2s",
            labelColor: "#666",
            num: 7
        }

        // elements
        this._g = null;
        this._lines = null;
        this._dots = null;
        this._yTicks = null;        
        this._legendBox = null;
        this._legendItems = null;

        // data
        this._tick = {
            name: "",
            isDate: false,
            format: "",
            fontSize: "9pt",
            color: "#666"
        };
        this._data = null;
        this._chartData = null;
        this._min = 0;
        this._max = 0;
        this._keys = null;
        this._sortedKeys = null;
        this._ranks = null;

        // scales
        this._xl = null;
        this._xb = null;
        this._y = null;
        this._color = null;
        this._bandwidth = { x: 0, y: 0 };

        this._isArc = false;
        this._isSeq = false;

        this._focus = null;
        this._uniqueId = new String(Date.now() * Math.random()).replace(".", "");

        // events
        this._onhover = null;
        this._onclick = null;
        this._oncancel = null;
    }

    size(_) {
        return arguments.length ? (this._width = _[0], this._height = _[1], this) : [this._width, this._height];
    }

    innerRadius(_) {
        return arguments.length ? (this._radius.inner = _, this) : this._radius.inner;
    }

    palette(_) {
        return arguments.length ? (this._palette = _, this) : this._palette;
    }

    options(_) {
        return arguments.length ? (this._options = Object.assign(this._options, _), this) : this._options;
    }

    legend(_) {
        return arguments.length ? (this._legend = Object.assign(this._legend, _), this) : this._legend;
    }

    tick(_) {
        return arguments.length ? (this._tick = Object.assign(this._tick, _), this) : this._tick;
    }

    data(_) {
        return arguments.length ? (this._data = _, this) : this._data;
    }

    onhover(_) {
        return arguments.length ? (this._onhover = _, this) : this._onhover;
    }

    onclick(_) {
        return arguments.length ? (this._onclick = _, this) : this._onclick;
    }

    oncancel(_) {
        return arguments.length ? (this._oncancel = _, this) : this._oncancel;
    }

    render() {
        this._init();
        this._process();
        this._initScales();
        this._renderChart();
        if (this._legend.enabled) this._renderLegend();
        return this;
    }

    _init() {
        this._isArc = this._options.nodeStyle === "arc";
        this._isSeq = this._options.chartType === "heatmap";

        const cb = this._getCharBox(this._tick.fontSize);
        this._radius.outer = Math.min(this._width, this._height) - (cb.height + 10); // dy of ticks = 10
    }

    _process() {
        const
            op = this._options,
            ascending = op.order === "asc";

        this._processKeys();
        const cd = this._data.map(d => {
            const tick = d[this._tick.name];
            const row = {
                tick: tick,
                values: this._keys.map(key => {
                    const value = +d[key];

                    if (value < this._min) this._min = value;
                    else if (value > this._max) this._max = value;

                    return { tick, key, value };
                })
            };

            const sorting = op.chartType === "rankmap" ? row.values : row.values.map(r => r);
            if (ascending) sorting.sort((a, b) => a.value - b.value);
            else sorting.sort((a, b) => b.value - a.value);

            const len = sorting.length;
            sorting.forEach((d, i) => d.rank = ascending ? len - i : i + 1);

            return row;
        });

        if (op.chartType === "rankmap") {
            this._sortedKeys = cd[0].values.map(d => d.key);
            this._ranks = this._sortedKeys.map(key => ({
                key: key,
                series: cd.map(row => {
                    var index = row.values.findIndex(_ => _.key === key);
                    if (!op.showZeros && row.values[index].value === 0) index = -1;
                    return {
                        tick: row.tick,
                        index: index
                    }
                })
            }));
        }

        this._chartData = cd;
    }

    _processKeys() {
        const keys = Object.keys(this._data[0]);

        if (this._tick.name === "") {
            this._tick.name = keys[0];
            this._keys = keys.slice(1);
        }
        else {
            const index = keys.indexOf(this._tick.name);
            if (index > -1) {
                keys.splice(index, 1);
                this._keys = keys;
            }
            else throw "Invalid tick field.";
        }
    }

    _initScales() {
        const
            op = this._options,
            radius = this._calculateRadius();

        this._xl = d3.scaleLinear().domain([0, this._chartData.length]).range([0, 360]);
        this._xb = d3.scaleBand().domain(this._seq(0, this._chartData.length)).range([0, 2 * Math.PI]);

        radius.max = this._isArc || !op.stickyNodes ? radius.outer / 2 : radius.inner + radius.node * 2 * this._keys.length;
        if (op.showZeros) {
            this._y = d3.scaleBand().domain(this._seq(0, this._keys.length)).range([radius.inner, radius.max]);
        }
        else {
            // y scale is from -1 to keys.length, -1 is for zero nodes
            const u = (radius.max - radius.inner) / (this._keys.length + 1);
            this._y = d3.scaleBand().domain(this._seq(-1, this._keys.length + 1)).range([radius.inner - u, radius.max]);
        }

        if (op.chartType === "rankmap")
            this._color = d3.scaleOrdinal().domain(this._keys).range(this._palette);
        else
            this._color = d3.scaleSequential(this._palette).domain([this._min, this._max]).nice();

        this._bandwidth.x = this._xb.bandwidth();
        this._bandwidth.y = this._y.bandwidth();
    }

    _calculateRadius() {
        const radius = this._radius;
        if (this._options.fixedNodeRadius)
            radius.node = this._options.fixedNodeRadius;
        else {
            const
                r1 = 2 * Math.PI * radius.inner / this._chartData.length / 2,
                r2 = (radius.outer / 2 - radius.inner) / (this._keys.length * 2);
            radius.node = Math.min(r1, r2);
        }
        return radius;
    }

    _renderChart() {
        const op = this._options;

        this._g = this._container.append("g")
            .attr("transform", `translate(${this._width / 2},${(this._height / 2)})`);

        if (op.chartType === "rankmap") this._renderLines();
        if (this._isArc)
            this._renderArcs();
        else
            this._renderDots();

        this._dots.append("title")
            .text(d => `${d.tick} - ${d.key}\nRank: ${d.rank}\nValue: ${d.value}`);

        this._attachEvents(this._dots);

        this._renderAxis();
        if (op.chartType === "heatmap") this._renderAxisY();
    }

    _renderLines() {
        var a = 0, r = 0;
        if (this._isArc) {
            a = this._bandwidth.x / 2;
            r = this._bandwidth.y / 2;
        }

        const line = d3.lineRadial()
            .curve(d3.curveLinearClosed)
            .angle((d, i) => this._xb(i) + a)
            .radius(d => this._y(d.index) + r);

        const opacity = this._options.alwaysShowLines ? 1 : 0;
        this._lines = this._g.selectAll(".line")
            .data(this._ranks)
            .join("path")
            .attr("class", "line")
            .attr("fill", "none")
            .attr("opacity", opacity)
            .attr("stroke", (d, i) => this._color(this._sortedKeys[i]))
            .attr("stroke-width", 2)
            .attr("d", d => line(d.series));
    }

    _renderArcs() {
        const arc = d3.arc()
            .innerRadius((d, i) => this._y(i))
            .outerRadius((d, i) => this._y(i) + this._bandwidth.y)
            .startAngle(d => this._xb(d.index))
            .endAngle(d => this._xb(d.index) + this._bandwidth.x);

        this._dots = this._g.append("g")
            .selectAll("g")
            .data(this._chartData)
            .join("g")
            .selectAll("path")
            .data((d, i) => d.values.map(v => Object.assign({ index: i }, v)))
            .join("path")
            .attr("fill", d => this._getColor(d))
            .attr("d", arc);
    }

    _renderDots() {
        const
            op = this._options,
            radius = this._radius,
            x = 2 * radius.node;

        const g = this._g.append("g")
            .selectAll("g")
            .data(this._chartData)
            .join("g")
            .attr("transform", (d, i) => `rotate(${this._xl(i) - 90})`);

        if (op.nodeStyle === "circle") {
            this._dots = g.selectAll("circle")
                .data(d => d.values)
                .join("circle")
                .attr("fill", d => this._getColor(d))
                .attr("cx", (d, i) => op.stickyNodes ? i * x + radius.inner : this._y(i))
                .attr("r", radius.node);
        }
        else {
            const
                w = radius.node * 2,
                hb = this._bandwidth.y / 2;

            this._dots = g.selectAll("rect")
                .data(d => d.values)
                .join("rect")
                .attr("fill", d => this._getColor(d))
                .attr("x", (d, i) => (op.stickyNodes ? i * x + radius.inner : this._y(i)) - hb)
                .attr("y", op.stickyNodes ? -radius.node : -hb)
                .attr("width", w).attr("height", w);
        }
    }

    _renderAxis() {
        const
            radius = this._radius,
            id = "axis_" + this._uniqueId,
            scale = d3.scaleLinear()
                .domain([0, this._chartData.length - 1])
                .range([0, 100 - (100 / this._chartData.length)]);

        this._drawCircle(id, radius.max);
        const ticks = scale.ticks();
        this._g.selectAll(".tick")
            .data(ticks)
            .join("g")
            .style("font-size", this._tick.fontSize)
            .attr("class", "tick")
            .attr("transform", "rotate(90)")
            .call(g => g.append("line")
                .attr("stroke", this._tick.color)
                .attr("stroke-dasharray", "1,2")
                .attr("x1", -radius.inner)
                .attr("x2", -radius.max - 10)
                .attr("transform", d => `rotate(${360 * scale(d) / 100})`))
            .call(g => g.append("text")
                .attr("dx", 3)
                .attr("dy", -5)
                .attr("fill", this._tick.color)
                .append("textPath")
                .attr("xlink:href", "#" + id)
                .attr("startOffset", d => scale(d) + "%")
                .text((d, i) => {
                    const s = this._chartData[d].tick;
                    if (this._tick.isDate) {
                        const date = this._tick.format !== "" ? d3.timeParse(s) : new Date(s);
                        return date.toLocaleDateString();
                    }
                    else
                        return s;
                }));
    }

    _drawCircle(id, radius) {
        this._g.append("path")
            .attr("id", id)
            .attr("fill", "none")
            .attr("stroke", "none")
            .attr("d",
                "M 0, 0 " +
                "m " + -radius + ",0 " +
                "a " + radius + "," + radius + " 0 0,1 " + radius * 2 + ",0 " +
                "a " + radius + "," + radius + " 0 0,1 " + (-radius * 2) + ",0 "
            );
    }

    _renderAxisY() {
        this._keys.forEach((d, i) => {
            const id = `axisY${i}_${this._uniqueId}`;
            this._drawCircle(id, this._y(i));
        });

        this._yTicks = this._g.append("g")
            .style("font-size", this._tick.fontSize)
            .attr("transform", "rotate(90)")
            .selectAll("text")
            .data(this._keys)
            .join("g")
            .style("visibility", "hidden")
            .call(g => {
                g.append("text")
                    .attr("dx", "0.5em")
                    .attr("stroke", "white")
                    .attr("stroke-width", 2)
                    .attr("fill", "none")
                    .call(t => {
                        t.append("textPath")
                            .attr("xlink:href", (d, i) => `#axisY${i}_${this._uniqueId}`)
                            .text(d => d)
                    })
                    .clone(true)
                    .attr("stroke", "none")
                    .attr("fill", this._tick.color);
            });
    }

    _renderLegend() {
        const
            w = 15,
            spacing = 2.5,
            format = d3.format(this._legend.format),
            h = this._getCharBox(this._legend.fontSize).height;

        this._legendBox = this._container.append("g")
            .style("font-size", this._legend.fontSize);

        const items = this._processLegend();
        const legend = this._legendItems = this._legendBox.selectAll("g")
            .data(items)
            .join("g")
            .attr("transform", (d, i) => `translate(0,${i * (h + spacing)})`)
            .call(g => g.append("rect")
                .attr("fill", d => this._isSeq ? this._color(d.f) : this._color(d.key))
                .attr("rx", 4).attr("ry", 4)
                .attr("width", w).attr("height", h))
            .call(g => g.append("text")
                .attr("dy", "1em")
                .attr("fill", this._legend.labelColor)
                .attr("transform", `translate(${w + spacing},0)`)
                .text((d, i) => {
                    if (this._isSeq)
                        return i < items.length - 1 ? `${format(d.f)} - ${format(d.c)}` : `> ${format(d.f)}`;
                    else
                        return d.key;
                }));

        this._attachEvents(legend);

        var centered = this._legend.centered;
        const
            box = this._legendBox.node().getBBox(),
            threshold = this._radius.inner - this._radius.node;

        if (box.width / 2 >= threshold || box.height / 2 >= threshold) centered = false;
        if (centered)
            this._legendBox.attr("transform", `translate(${(this._width - box.width) / 2},${(this._height - box.height) / 2})`);
        else {
            const
                left = (this._width / 2) + this._y.range()[1] + h + 15,
                top = (this._height / 2) - this._y.range()[1];

            this._legendBox.attr("transform", `translate(${left},${top})`);
        }
    }

    _processLegend() {
        if (this._options.chartType === "rankmap")
            return this._keys.map(d => ({ key: d }));
        else {
            const
                ranges = [],
                ticks = this._color.ticks(this._legend.num);

            for (let i = 0; i < ticks.length - 1; i++) {
                ranges.push({ f: ticks[i], c: ticks[i + 1] });
            }
            return ranges;
        }
    }

    _attachEvents(selections) {
        const op = this._options;
        selections.attr("opacity", 1)
            .on("click", (e, d) => {
                if (op.clickAction === "none") return;

                const f = this._focus;
                if (f && (f === d || f.key && f.key === d.key)) {
                    this._focus = null;
                    this._cancel();
                    if (this._oncancel) this._oncancel(d);
                }
                else {
                    this._focus = d;
                    this._highlight(d);                    
                    if (this._onclick) this._onclick(d);
                }
                e.stopPropagation();
            })
            .on("mouseenter", (e, d) => {
                if (!this._focus) {
                    this._highlight(d);
                    if (this._onhover) this._onhover(d);
                }
            })
            .on("mouseleave", (e, d) => { if (!this._focus) this._cancel(); });

        this._container.on("click.eric.ringchart." + this._uniqueId, () => {
            if (op.clickAction === "none") return;
            this._focus = null;
            this._cancel();
        })
    }

    _highlight(d) {
        if (this._isSeq) {
            const t = this._dots.transition().duration(500);
            if (d.key) {
                t.attr("opacity", _ => _.key === d.key ? 1 : 0.2);
                this._yTicks.style("visibility", _ => _ === d.key ? "visible" : "hidden");
            }
            else
                t.attr("opacity", _ => _.value >= d.f && _.value < d.c ? 1 : 0.2);
        }
        else {
            this._dots.transition().duration(500).attr("opacity", _ => _.key === d.key ? 1 : 0.2);
            if (this._lines) {
                const opacity = this._options.alwaysShowLines ? 0.2 : 0; 
                this._lines.transition().duration(250).attr("opacity", _ => _.key === d.key ? 1 : opacity);
            }            
            if (this._yTicks) this._yTicks.style("visibility", _ => _ === d.key ? "visible" : "hidden");
            if (this._legendItems) this._legendItems.style("font-weight", _ => _.key === d.key ? "bold" : "");
        }
    }

    _cancel() {
        this._dots.transition().duration(500).attr("opacity", 1);
        if (this._lines) {
            const opacity = this._options.alwaysShowLines ? 1 : 0;
            this._lines.transition().duration(250).attr("opacity", opacity);
        }        
        if (this._yTicks) this._yTicks.style("visibility", "hidden");
        if (this._legendItems) this._legendItems.style("font-weight", "");
    }

    _getColor(d) {
        return !this._options.showZeros && d.value === 0 ? "none" : this._color(this._isSeq ? d.value : d.key);
    }

    _getCharBox(fontSize) {
        var text;
        try {
            text = this._container.append("text")
                .attr("font-size", fontSize)
                .text("M");
            return text.node().getBBox();
        }
        finally {
            if (text) text.remove();
        }
    }

    _seq(start, length) {
        return Array.from({ length: length }).map((d, i) => start + i);
    }
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Functions`
)});
  main.variable(observer("arc")).define("arc", ["d3","radius"], function(d3,radius){return(
d3
  .arc()
  .startAngle(d => d.x0)
  .endAngle(d => d.x1)
  .padAngle(1 / radius)
  .padRadius(radius)
  .innerRadius(d => Math.sqrt(d.y0))
  .outerRadius(d => Math.sqrt(d.y1) - 1)
)});
  main.variable(observer("arc_1")).define("arc_1", ["d3","radius_1"], function(d3,radius_1){return(
d3.arc()
    .startAngle(d => d.x0)
    .endAngle(d => d.x1)
    .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(radius_1 * 1.5)
    .innerRadius(d => d.y0 * radius_1)
    .outerRadius(d => Math.max(d.y0 * radius_1, d.y1 * radius_1 - 1))
)});
  main.variable(observer("breadcrumbPoints")).define("breadcrumbPoints", ["breadcrumbWidth","breadcrumbHeight"], function(breadcrumbWidth,breadcrumbHeight){return(
function breadcrumbPoints(d, i) {
  const tipWidth = 10;
  const points = [];
  points.push("0,0");
  points.push(`${breadcrumbWidth},0`);
  points.push(`${breadcrumbWidth + tipWidth},${breadcrumbHeight / 2}`);
  points.push(`${breadcrumbWidth},${breadcrumbHeight}`);
  points.push(`0,${breadcrumbHeight}`);
  if (i > 0) {
    // Leftmost breadcrumb; don't include 6th vertex.
    points.push(`${tipWidth},${breadcrumbHeight / 2}`);
  }
  return points.join(" ");
}
)});
  main.variable(observer("color_1")).define("color_1", ["d3","data"], function(d3,data){return(
d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length+2))
)});
  main.variable(observer("color_2")).define("color_2", ["d3","data"], function(d3,data){return(
d3.scaleOrdinal(d3.quantize(d3.interpolateRdYlGn, data.children.length + 1))
)});
  main.variable(observer("createCircles")).define("createCircles", ["d3","myColor","y","x","total","tooltip"], function(d3,myColor,y,x,total,tooltip){return(
group => {
  group.selectAll('.path').each(function(d) {
    // Outer circle
    d3.select(this)
      .append('g')
      .selectAll('circle')
      .data(d.values)
      .join('circle')
      .attr('class', 'outer-circle')
      .attr('name', this.__data__.name)
      .attr('fill', 'white')
      .attr('stroke', myColor(this.__data__.name))
      .attr('stroke-width', 1)
      .attr('r', '6')
      .attr('cy', d => y(d))
      .attr('cx', (d, i) => x(total.dates[i]));

    // Inner circle
    d3.select(this)
      .append('g')
      .selectAll('circle')
      .data(d.values)
      .join('circle')
      .attr('class', 'inner-circle')
      .attr('name', this.__data__.name)
      .attr('fill', myColor(this.__data__.name))
      .attr('r', '3')
      .attr('cy', d => y(d))
      .attr('cx', (d, i) => x(total.dates[i]))
      .on('mouseover', function(event, d, i) {
        tooltip.html(`<div>${d}</div>`).style('visibility', 'visible');

        d3.select(this).attr('fill', 'blue');
      })
      .on('mousemove', function(event) {
        tooltip
          .style('top', event.pageY + 10 + 'px')
          .style('left', event.pageX + 10 + 'px');
      })
      .on('mouseout', function() {
        tooltip.html(``).style('visibility', 'hidden');
      });
  });
}
)});
  main.variable(observer("createPaths")).define("createPaths", ["total","myColor","line"], function(total,myColor,line){return(
group => {
  group
    .selectAll('g')
    .data(total.series)
    .join('g')
    .attr('fill', 'none')
    .attr('class', 'path')
    .attr('id', d => `${myColor(d.name)}`);

  group
    .selectAll('.path')
    .append('path')
    .data(total.series)
    .style('mix-blend-mode', 'multiply')
    .attr('stroke-width', 2.5)
    .attr('d', d => line(d.values))
    .attr('stroke', d => myColor(d.name));
}
)});
  main.variable(observer("format_1")).define("format_1", ["d3"], function(d3){return(
d3.format(",d")
)});
  main.variable(observer("label_partition")).define("label_partition", ["d3"], function(d3){return(
label_data => {
  const root = d3.hierarchy(label_data)
      .sum(l => l.value)
      .sort((a, b) => b.value - a.value);
  return d3.partition()
      .size([2 * Math.PI, root.height + 1])
    (root);
}
)});
  main.variable(observer("line")).define("line", ["d3","x","total","y"], function(d3,x,total,y){return(
d3
  .line()
  .defined(d => !isNaN(d))
  .x((d, i) => x(total.dates[i]))
  .y(d => y(d))
)});
  main.variable(observer("partition")).define("partition", ["d3","radius"], function(d3,radius){return(
data =>
  d3.partition().size([2 * Math.PI, radius * radius])(
    d3
      .hierarchy(data)
      .sum(d => d.value)
      .sort((a, b) => b.value - a.value)
  )
)});
  main.variable(observer("partition_1")).define("partition_1", ["d3"], function(d3){return(
data => {
  const root = d3.hierarchy(data)
      .sum(d => d.value)
      .sort((a, b) => b.value - a.value);
  return d3.partition()
      .size([2 * Math.PI, root.height + 1])
    (root);
}
)});
  main.variable(observer("mousearc")).define("mousearc", ["d3","radius"], function(d3,radius){return(
d3
  .arc()
  .startAngle(d => d.x0)
  .endAngle(d => d.x1)
  .innerRadius(d => Math.sqrt(d.y0))
  .outerRadius(radius)
)});
  main.variable(observer("myColor")).define("myColor", ["d3","total"], function(d3,total){return(
d3
  .scaleOrdinal()
  .domain(
    total.series.map(val => {
      return val.name;
    })
  )
  .range(['blue', 'orange', 'red', 'cyan', 'green'])
)});
  main.variable(observer("x")).define("x", ["d3","total","margin","innerWidth"], function(d3,total,margin,innerWidth){return(
d3
      .scaleUtc()
      .domain(d3.extent(total.dates))
      .range([margin.left, innerWidth + margin.left])
)});
  main.variable(observer("xAxis")).define("xAxis", ["svgHeight","margin","d3","x","svgWidth"], function(svgHeight,margin,d3,x,svgWidth){return(
(group) => {
      group
        .attr(
          'transform',
          `translate(0,${svgHeight - margin.bottom})`,
        )
        .call(
          d3
            .axisBottom(x)
            .ticks(svgWidth / 80)
            .tickSizeOuter(0),
        )
        .call((group) => group.select('.domain').remove())
        .call((group) => group.selectAll('line').remove())
        .call((group) => group.selectAll('text').style('fill', '#c9c6c6'));
    }
)});
  main.variable(observer("y")).define("y", ["d3","total","svgHeight","margin"], function(d3,total,svgHeight,margin){return(
d3
      .scaleLinear()
      .domain([0, d3.max(total.series, (d) => d3.max(d.values))])
      .nice()
      .range([svgHeight - margin.bottom, margin.top])
)});
  main.variable(observer("yAxis")).define("yAxis", ["margin","d3","y","innerWidth"], function(margin,d3,y,innerWidth){return(
(group) =>
      group
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).tickSize(`-${innerWidth}`))
        .call((group) => group.select('.domain').remove())
        .call((group) => group.selectAll('text').style('fill', '#c9c6c6'))
        .call((group) => group.selectAll('line').style('stroke', '#c9c6c6'))
)});
  main.variable(observer("$")).define("$", ["require"], function(require){return(
require("jquery")
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Parameters`
)});
  main.variable(observer("breadcrumbHeight")).define("breadcrumbHeight", function(){return(
30
)});
  main.variable(observer("breadcrumbWidth")).define("breadcrumbWidth", function(){return(
75
)});
  main.variable(observer("height")).define("height", ["screen"], function(screen){return(
screen.height * 0.6
)});
  main.variable(observer("innerHeight")).define("innerHeight", ["svgHeight","margin"], function(svgHeight,margin){return(
svgHeight - margin.top - margin.bottom
)});
  main.variable(observer("innerWidth")).define("innerWidth", ["svgWidth","margin"], function(svgWidth,margin){return(
svgWidth - margin.left - margin.right
)});
  main.variable(observer("radius")).define("radius", ["width"], function(width){return(
width / 2
)});
  main.variable(observer("radius_1")).define("radius_1", ["width_1"], function(width_1){return(
width_1 / 6
)});
  main.variable(observer("label_radius")).define("label_radius", ["label_width"], function(label_width){return(
label_width/30
)});
  main.variable(observer("label_width")).define("label_width", function(){return(
3000
)});
  main.variable(observer("margin")).define("margin", function(){return(
{ top: 30, right: 200, bottom: 30, left: 30 }
)});
  main.variable(observer("svgHeight")).define("svgHeight", function(){return(
600
)});
  main.variable(observer("svgWidth")).define("svgWidth", function(){return(
1000
)});
  main.variable(observer("width")).define("width", function(){return(
640
)});
  main.variable(observer("width_1")).define("width_1", function(){return(
400
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Appendix`
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@^6.2")
)});
  const child1 = runtime.module(define1);
  main.import("form", child1);
  main.variable(observer("tooltip")).define("tooltip", ["d3"], function(d3){return(
d3
  .select('body')
  .append('div')
  .style('position', 'absolute')
  .style('z-index', '99')
  .style('visibility', 'hidden')
  .style('padding', '10px')
  .style('background', 'rgba(0,0,0,0.6)')
  .style('border-radius', '4px')
  .style('color', '#fff')
)});
  return main;
}
