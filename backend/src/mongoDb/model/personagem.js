import mongoose from ("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    kind: {
      type: String,
      required: true,
    },
    life: {
      type: Number,
      required: true,
    },
    status: {
      level: {
        type: Number,
        required: true,
      },
      experience: {
        type: Number,
        required: true,
      },
      str: {
        type: Number,
        required: true,
      },
      dext: {
        type: Number,
        required: true,
      },
      agi: {
        type: Number,
        required: true,
      },
      int: {
        type: Number,
        required: true,
      }
    },
    equipaments: {
      pound: {
        type: Number,
        required: true,
      },
      armor: {
        healm: {
          type: Number,
          required: true,
        },
        cheast: {
          type: Number,
          required: true,
        },
        boots: {
          type: Number,
          required: true,
        },
        gloves: {
          type: Number,
          requiree,
        }
      },
      weaponRight:{
        type: Number,
          requiree,
      },
      weaponLeft: {
        type: Number,
        requiree,
      },
      inventory: []
    }
  },
  { timestamps: true }
);

export const Character = mongoose.model("characters", characterSchema);

