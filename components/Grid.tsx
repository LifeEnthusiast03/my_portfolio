import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";

function Grid() {
  return (
    <section>
      {/* grid styling directly to BentoGrid */}
      <BentoGrid className="grid grid-cols-6 gap-6">
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
           
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
