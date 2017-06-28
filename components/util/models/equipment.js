/**
 * A model for character equipment.
 * @final
 */
class Equipment {
  /**
   * @param {!Array<!Object>} equipmentSummaries Contains the equipment slot and
   *     item ID
   * @param {!Array<!Object>} allEquipment Contains detailed info for equipment
   */
  constructor(equipmentSummaries, allEquipment) {
    this.helm =
        this.getSlottedItem_(
            constants.EquipmentSlot.HELM, equipmentSummaries, allEquipment);

    this.coat =
        this.getSlottedItem_(
            constants.EquipmentSlot.COAT, equipmentSummaries, allEquipment);

    this.shoulders =
        this.getSlottedItem_(
            constants.EquipmentSlot.SHOULDERS, equipmentSummaries,
            allEquipment);

    this.gloves =
        this.getSlottedItem_(
            constants.EquipmentSlot.GLOVES, equipmentSummaries, allEquipment);

    this.leggings =
        this.getSlottedItem_(
            constants.EquipmentSlot.LEGGINGS, equipmentSummaries, allEquipment);

    this.boots =
        this.getSlottedItem_(
            constants.EquipmentSlot.BOOTS, equipmentSummaries, allEquipment);

    this.weaponSet1Main =
        this.getSlottedItem_(
            constants.EquipmentSlot.WEAPON_A_1, equipmentSummaries,
            allEquipment);

    this.weaponSet1Offhand =
      this.getSlottedItem_(
            constants.EquipmentSlot.WEAPON_A_2, equipmentSummaries,
            allEquipment);

    this.weaponSet2Main =
      this.getSlottedItem_(
            constants.EquipmentSlot.WEAPON_B_1, equipmentSummaries,
            allEquipment);

    this.weaponSet2Offhand =
      this.getSlottedItem_(
            constants.EquipmentSlot.WEAPON_B_2, equipmentSummaries,
            allEquipment);

    this.breather =
        this.getSlottedItem_(
            constants.EquipmentSlot.HELM_AQUATIC, equipmentSummaries,
            allEquipment);

    this.aquaticWeapon1 =
        this.getSlottedItem_(
            constants.EquipmentSlot.WEAPON_AQUATIC_A, equipmentSummaries,
            allEquipment);

    this.aquaticWeapon2 =
      this.getSlottedItem_(
            constants.EquipmentSlot.WEAPON_AQUATIC_B, equipmentSummaries,
            allEquipment);

    this.backpack =
      this.getSlottedItem_(
            constants.EquipmentSlot.BACKPACK, equipmentSummaries, allEquipment);

    this.amulet =
      this.getSlottedItem_(
            constants.EquipmentSlot.AMULET, equipmentSummaries, allEquipment);

    this.accessory1 =
      this.getSlottedItem_(
            constants.EquipmentSlot.ACCESSORY_1, equipmentSummaries,
            allEquipment);

    this.accessory2 =
      this.getSlottedItem_(
            constants.EquipmentSlot.ACCESSORY_2, equipmentSummaries,
            allEquipment);

    this.ring1 =
      this.getSlottedItem_(
            constants.EquipmentSlot.RING_1, equipmentSummaries, allEquipment);

    this.ring2 =
      this.getSlottedItem_(
            constants.EquipmentSlot.RING_2, equipmentSummaries, allEquipment);

    this.axe =
      this.getSlottedItem_(
            constants.EquipmentSlot.AXE, equipmentSummaries, allEquipment);

    this.sickle =
      this.getSlottedItem_(
            constants.EquipmentSlot.SICKLE, equipmentSummaries, allEquipment);

    this.pick =
      this.getSlottedItem_(
            constants.EquipmentSlot.PICK, equipmentSummaries, allEquipment);
  }

  /**
   * Returns the item in the slot.
   * @param {string} slot
   * @param {!Array<!Object>} equipmentSummaries Contains the equipment slot and
   *     item ID
   * @param {!Array<!Object>} allEquipment Contains detailed info for equipment
   * @return {!Object}
   */
  getSlottedItem_(slot, equipmentSummaries, allEquipment) {
    const item = equipmentSummaries.find(
        (summary) => {
          return summary.slot === slot;
        });

    if (!item) {
      return;
    }

    return allEquipment.find(
        (equipment) => {
          return equipment.id === item.id;
        });
  }
}