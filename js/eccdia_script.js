function edu_firstGraph(chosen_city) {
    d3.select('.svg4_2').selectAll("*").remove();
    for (z = 0; z < chosen_city.length; z++) {
        make_title(chosen_city[z]);
        make_graph2(chosen_city[z]);
    }
    make_legend();

    function make_title(city_id) {

        for (i = 0; i < sc_no.length; i++) {
            if (sc_no[i]["city_id"] == city_id) {
                city_name = sc_no[i]["city_name"];
                break;
            }
        }
        var svg2 = d3.select(".svg4_2").append("svg")
            .attr("width", 960)
            .attr("height", 100)
            .append("g")
            .attr("transform", "translate(-.5,-.5)");

        svg2.append("text")
            .attr("x", (480))
            .attr("y", 50)
            .attr("text-anchor", "middle")
            .style("font-size", "25px")
            // .style("text-decoration", "underline")
            .text(city_name);
    }

    function make_graph2(city_id) {


        var data = [];
        for (i = 0; i < sc_no.length; i++) {
            if (sc_no[i]["city_id"] == city_id) {
                data.push(sc_no[i])
                city_name = sc_no[i]["city_name"]
            }
        }
        console.log(data)
        mdata = {};
        mdata["name"] = city_name;
        count1 = 0;
        count2 = 0;
        count3 = 0;
        es1 = {"name": "Government", "children": []};
        es2 = {"name": "Independent", "children": []};
        es3 = {"name": "Catholic", "children": []}
        for (i = 0; i < data.length; i++) {
            switch (data[i]["edu_sec"]) {
                case "Government":
                    es1["children"][count1] = {"name": data[i]["school_type"], "size": data[i]["school_no"]};
                    count1 = count1 + 1;
                    break;
                case "Independent":
                    es2["children"][count2] = {"name": data[i]["school_type"], "size": data[i]["school_no"]};
                    count2 = count2 + 1;
                    break;
                case "Catholic":
                    es3["children"][count3] = {"name": data[i]["school_type"], "size": data[i]["school_no"]};
                    count3 = count3 + 1;
                    break;
            }
        }
        if (es1["children"])
        mdata["children"] = [es1, es2, es3];
        console.log(mdata);


        var width = 800,
            height = 400,
            color = d3.scale.category10();

        var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function (d) {
                return "<strong>Number of Schools:</strong> <span style='color:mediumpurple'>" + d.school_no + "</span>";
            })

        var treemap = d3.layout.treemap()
            .padding(4)
            .size([width, height])
            .value(function (d) {
                return d.size;
            });

        var svg = d3.select(".svg4_2").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(-.5,-.5)");

        var cell = svg.data([mdata]).selectAll("g")
            .data(treemap.nodes)
            .enter().append("g")
            .attr("class", "cell")
            .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });
        cell.append("rect")
            .attr("class", "treemap")
            .attr("width", function (d) {
                return d.dx;
            })
            .attr("height", function (d) {
                return d.dy;
            })
            .style("fill", function (d) {
                return d.children ? color(d.name) : null;
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide);

        cell.append("text")
            .attr("class", "treemap_text")
            .attr("x", function (d) {
                return d.dx / 2;
            })
            .attr("y", function (d) {
                return d.dy / 2 -5;
            })
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .style("font-size", "13px")
            .text(function (d) {
                return d.children ? null : d.name;
            })
            .append('svg:tspan')
            .attr("x", function (d) {
                return d.dx / 2;
            })
            .attr("y", function (d) {
                return d.dy /2 +13;
            })
            .text(function(d) { return d.children ? null : d.size; });

    }

    function make_legend() {


        var color_list = ["#2ca02c","#ff7f0e", "#dc3912"];

        education_sector = ["Catholic", "Government", "Independent"];

        var color = d3.scale.ordinal()
            .range(color_list);
        var svg = d3.select(".svg4_2").append("svg")
        // .attr("width", width + margin.left + margin.right)
        // .attr("height", height + margin.top + margin.bottom)
            .attr("width", 400)
            .attr("height", 20)
            .append("g")
            .attr("transform", "translate(" + 0 + "," + 0 + ")");

        var legend = svg.selectAll(".legend")
            .data(education_sector)
            .enter()
            .append("g")
            // .attr("transform", "translate(" + width - margin.right + "," + margin.top + ")");
            .attr("transform", function (d, i) {
                return "translate(" + i % 3 * 120 + "," + Math.floor(i / 3) * 20 + ")";
            })

        legend.append("rect")
            .attr("fill", color)
            .attr("width", 15)
            .attr("height", 15)
            .attr("y", function (d, i) {
                return;
            })
            .attr("x", 5);

        legend.append("text")
            .attr("class", "label")
            .attr("y", function (d, i) {
                return 13;
            })
            .attr("x", 21)
            .attr("text-anchor", "start")
            .attr("font-size", "15px")
            .text(function (d, i) {
                return education_sector[i];
            });
    }
}
