const SurvivalGuide = () => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Heat</h2>
        <ul className="list-disc pl-4">
          <li>
            Hydration is key: Drink plenty of water throughout the day, even if
            you don't feel thirsty. Aim for 1 quart per hour in extreme heat.
          </li>
          <li>
            Plan ahead: If hiking, research water sources and consider
            purification methods.
          </li>
          <li>Eat regularly: Maintain electrolyte balance with food.</li>
          <li>Seek shade and rest: Avoid the hottest parts of the day.</li>
          <li>
            Clothing: Wear loose, lightweight, protective clothing. Don't remove
            clothing to cool down; it traps sweat and cools the body.
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Cold</h2>
        <ul className="list-disc pl-4">
          <li>
            Hypothermia is a threat: Find shelter or create your own if needed.
          </li>
          <li>Stay dry: Wet clothes lose insulating ability.</li>
          <li>
            Layering is essential: Use loose-fitting layers for temperature
            regulation.
          </li>
          <li>
            Stay hydrated: Dehydration worsens cold tolerance. Drink even if you
            don't feel thirsty.
          </li>
          <li>Avoid warming with alcohol or caffeine: They dehydrate you.</li>
          <li>
            Fire for warmth: Build a fire in front of your shelter entrance. Use
            rocks for extra warmth.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">General Tips</h2>
        <ul className="list-disc pl-4">
          <li>
            Prepare for the conditions: Research weather and terrain before any
            adventure.
          </li>
          <li>Use common sense: Don't push yourself beyond your limits.</li>
          <li>
            Know when to turn back: Bad weather can ruin a trip, but it
            shouldn't ruin your life.
          </li>
        </ul>
      </div>
    </>
  );
};

const HumidityTips = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Beating the Bangladesh Blues: Humidity Hacks for a Comfortable Life
      </h2>
      <p className="mb-4">
        Bangladesh's tropical monsoon climate brings high humidity most of the
        year. Here are some tips to stay cool and comfortable despite the damp:
      </p>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">
          Combating High Humidity (Common Scenario):
        </h3>
        <ul className="list-disc pl-4">
          <li>
            Air Circulation is Key: Utilize ceiling fans or table fans to create
            a refreshing breeze. Consider portable evaporative coolers for
            targeted cooling, but remember, these add moisture to the air.
          </li>
          <li>
            Breathable Clothing: Opt for loose-fitting clothes made from cotton
            or lightweight linen. These fabrics allow sweat to evaporate,
            keeping you cooler.
          </li>
          <li>
            Shorter Showers: Reduce the amount of moisture you add to the
            environment during your daily routine.
          </li>
          <li>
            Dehumidifier (Use Strategically): While dehumidifiers can be
            helpful, particularly in mold-prone areas, excessive
            dehumidification can make the air uncomfortably dry. Consider using
            one only when necessary.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">
          Moderate Humidity (Less Common):
        </h3>
        <ul className="list-disc pl-4">
          <li>
            Humidifier (Optional): If you experience dry skin or respiratory
            issues, a humidifier can add moisture to the air.
          </li>
          <li>
            Embrace Houseplants: Plants like ferns and peace lilies naturally
            add moisture to their surroundings.
          </li>
          <li>
            Shorter, Lukewarm Showers with Caution: Allow the bathroom to steam
            up slightly, but ensure proper ventilation afterwards to prevent
            mold growth. Opt for lukewarm showers over hot ones.
          </li>
          <li>
            Cool Mist Diffuser: This adds moisture without raising the room
            temperature, providing relief from dryness.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Ideal Humidity Range:</h3>
        <p>
          For most people, the ideal humidity range for comfort falls between
          40% and 60%.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">
          Monitoring and Taking Action:
        </h3>
        <ul className="list-disc pl-4">
          <li>
            Invest in a Hygrometer: This handy tool measures humidity levels in
            your home, allowing you to determine if you need to add or remove
            moisture.
          </li>
          <li>
            Focus on Management, Not Elimination: Since high humidity is more
            prevalent in Bangladesh, prioritize strategies like air circulation
            and breathable clothing to manage it effectively.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">
          Bonus Tip: Monsoon Season (June-September):
        </h3>
        <ul className="list-disc pl-4">
          <li>
            Hydration is Essential: Drink plenty of water to stay hydrated and
            combat the combined effects of heat and humidity.
          </li>
          <li>
            Embrace Moisture-Wicking Fabrics: Wear loose-fitting clothes made
            from materials that wick away sweat, keeping you cooler and more
            comfortable.
          </li>
          <li>
            Drying Laundry: Laundry may take longer to dry indoors during
            monsoon season. Consider using a drying rack outdoors whenever
            possible.
          </li>
        </ul>
      </div>
    </div>
  );
};

const GasLeakGuide = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Sniffing Out a Small Gas Leak? Here's What to Do</h2>
      <p className="mb-4">If you suspect a minor gas leak, here's how to handle it calmly and safely:</p>

      <ol className="list-decimal pl-8 mb-8">
        <li>Stop the Sniffing: Get out of the area and take fresh air. Breathe deeply, but don't panic.</li>
        <li>Open Up! Create ventilation by opening windows and doors as wide as possible. This lets the gas escape outdoors.</li>
        <li>Shut it Down (Safely): If you can safely reach the gas meter, locate the shut-off valve. It's usually a yellow handle. Turn it a quarter-turn clockwise to stop the gas flow. Only do this if the valve is readily accessible and there are no flames or sparks nearby.</li>
        <li>Call for Help: While the area airs out, call a licensed plumber or gas fitter to locate and repair the leak. Don't attempt to fix it yourself.</li>
        <li>No Flames, No Sparks: Leave appliances off and avoid anything that could ignite the gas, like lighters or electronics.</li>
      </ol>

      <p className="font-bold mb-2">Remember:</p>
      <ul className="list-disc pl-4 mb-4">
        <li>Minor leaks can still be dangerous. Take action to avoid a bigger problem.</li>
        <li>Fresh air is your friend. Open those windows!</li>
        <li>If unsure about the shut-off valve, leave it to the professionals.</li>
        <li>Play it safe – call a qualified technician for repairs.</li>
      </ul>
    </div>
  );
};

const FireSafetyGuide = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Fire! Don't Panic, Take Action!</h2>
      <p className="mb-4">A fire can spread quickly. Here's what to do the moment you discover a fire:</p>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Evacuate Immediately:</h3>
        <ul className="list-disc pl-4">
          <li>Get everyone out: Help family members, especially young children and elderly individuals, evacuate the building quickly and calmly. Don't waste time gathering belongings.</li>
          <li>Sound the Alarm: If there's a fire alarm, activate it to alert others.</li>
          <li>Head for the Exits: Use the nearest exit and know your escape routes. If your usual exit is blocked, use an alternative route.</li>
          <li>Meet at a Designated Meeting Place: Establish a meeting point outside your home where everyone can gather after escaping the fire.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Contain the Fire (if Safe to Do So):</h3>
        <ul className="list-disc pl-4">
          <li>Small Fire Extinguisher: If the fire is small and contained, and you have a working fire extinguisher, attempt to extinguish it. Only use a fire extinguisher if you've been trained and the fire is manageable.</li>
          <li>Close Doors Behind You: This helps contain the fire and smoke to the room of origin.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Call for Help:</h3>
        <ul className="list-disc pl-4">
          <li>Once everyone is safely outside, call emergency services immediately (dial 112 in Bangladesh).</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Wait for Help:</h3>
        <ul className="list-disc pl-4">
          <li>Don't re-enter the building: Stay outside and wait for firefighters to arrive.</li>
          <li>Provide information to responders: Once it's safe to do so, inform firefighters about the location of the fire and any trapped individuals.</li>
        </ul>
      </div>

      <p className="font-bold mb-2">Remember:</p>
      <ul className="list-disc pl-4 mb-4">
        <li>Every Second Counts: Act quickly to evacuate everyone safely.</li>
        <li>Stay Calm: Panic can hinder clear thinking. Focus on getting out safely and calling for help.</li>
        <li>Leave Firefighting to Professionals: Don't attempt to fight a large fire yourself. Firefighters have the training and equipment to extinguish the blaze safely.</li>
      </ul>
    </div>
  );
};

export { HumidityTips, SurvivalGuide, GasLeakGuide, FireSafetyGuide }
