import { Schema, model } from "mongoose";

const locationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    locationType: {
      type: String,
    },
    region: {
      type: String,
    },
    rate: {
      type: Number,
    },
    description: {
      type: String,
    },
    coordinates: {
      lat: { type: Number },
      lon: { type: Number },
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    feedbacksId: [
      {
        type: Schema.Types.ObjectId,
        ref: "feedback",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const LocationModel = model("location", locationSchema);
