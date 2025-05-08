export const configConsts = [
  { label: "Breakpoints", type: "breakpoints", class: "numerical" },
  {
    label: "Breadth Coverage Depth",
    type: "coverage_breadth",
    class: "numerical"
  },
  { label: "Cell Call", type: "cell_call", class: "categorical" },
  { label: "Column", type: "column", class: "categorical" },
  { label: "Coverage Depth", type: "coverage_depth", class: "numerical" },
  {
    label: "Estimated Library Size",
    type: "estimated_library_size",
    class: "numerical"
  },
  {
    label: "Experimental Condition",
    type: "experimental_condition",
    class: "categorical"
  },
  { 
		label: "FastQ Screen Adapters",
		type: "fastqscreen_adapters",
		class: "numerical"
	},
  { 
		label: "FastQ Screen Adapters Multihit",
		type: "fastqscreen_adapters_multihit",
		class: "numerical"
	},
  { 
		label: "FastQ Screen Agrobacterium",
		type: "fastqscreen_agrobacterium",
		class: "numerical"
	},
  { 
		label: "FastQ Screen Agrobacterium Multihit",
		type: "fastqscreen_agrobacterium_multihit",
		class: "numerical"
	},
  {
    label: "Fastqscreen Human",
    type: "fastqscreen_grch37",
    class: "numerical"
  },
  {
    label: "Fastqscreen Human Multihit",
    type: "fastqscreen_grch37_multihit",
    class: "numerical"
  },
  { 
		label: "Fastqscreen Mouse",
		type: "fastqscreen_mm10",
		class: "numerical"
	},
  {
    label: "Fastqscreen Mouse Multihit",
    type: "fastqscreen_mm10_multihit",
    class: "numerical"
  },
  { 
		label: "FastQ Screen No Hit",
		type: "fastqscreen_nohit",
		class: "numerical"
	},
  { 
		label: "FastQ Screen Pseudomonas",
		type: "fastqscreen_pseudomonas",
		class: "numerical"
	},
  { 
		label: "FastQ Screen Pseudomonas Multihit",
		type: "fastqscreen_pseudomonas_multihit",
		class: "numerical"
	},
  {
    label: "FastqQ Screen Salmon",
    type: "fastqscreen_salmon",
    class: "numerical"
  },
  {
    label: "FastQ Screen Salmon Multihit",
    type: "fastqscreen_salmon_multihit",
    class: "numerical"
  },
  { 
		label: "FastQ Screen Total Reads",
		type: "fastqscreen_total_reads",
		class: "numerical"
	},
  { 
		label: "FastQ Screen Univec",
		type: "fastqscreen_univec",
		class: "numerical"
	},
  { 
		label: "FastQ Screen Univec Multihit",
		type: "fastqscreen_univec_multihit",
		class: "numerical"
	},
  {
    label: "HMMcopy Autocorrelation",
    type: "autocorrelation_hmmcopy",
    class: "numerical"
  },
  { 
		label: "HMMcopy CV",
		type: "cv_hmmcopy",
		class: "numerical"
	},
  {
    label: "HMMcopy Empty Bins",
    type: "empty_bins_hmmcopy",
    class: "numerical"
  },
  { 
		label: "HMMcopy Log Likelihood",
		type: "log_likelihood",
		class: "numerical"
	},
  { 
		label: "HMMcopy MAD",
		type: "mad_hmmcopy",
		class: "numerical"
	},
  {
    label: "HMMcopy Mean Reads Per Bin",
    type: "mean_hmmcopy_reads_per_bin",
    class: "numerical"
  },
  {
    label: "HMMcopy Median Reads Per Bin",
    type: "median_hmmcopy_reads_per_bin",
    class: "numerical"
  },
  {
    label: "HMMcopy StDev Reads Per Bin",
    type: "std_hmmcopy_reads_per_bin",
    class: "numerical"
  },
  {
    label: "HMMcopy Total Mapped Reads",
    type: "total_mapped_reads_hmmcopy",
    class: "numerical"
  },
  { 
		label: "Is Control",
		type: "is_control",
		class: "boolean"
	},
  { 
		label: "Is S-Phase",
		type: "is_s_phase",
		class: "boolean"
	},
  {
    label: "Is S-Phase Probability",
    type: "is_s_phase_prob",
    class: "numerical"
  },
  {
    label: "MBRSI Dispersion Non Integerness",
    type: "MBRSI_dispersion_non_integerness",
    class: "numerical"
  },
  { 
		label: "MBRSM Dispersion",
		type: "MBRSM_dispersion",
		class: "numerical"
	},
  {
    label: "MBRSI Non Integerness",
    type: "MBRSI_non_integerness",
    class: "numerical"
  },
  { label: "Mean Copy", type: "mean_copy", class: "numerical" },
  { label: "Mean Insert Size", type: "mean_insert_size", class: "numerical" },
  { label: "Mean State Mads", type: "mean_state_mads", class: "numerical" },
  { label: "Mean State Vars", type: "mean_state_vars", class: "numerical" },
  {
    label: "Median Insert Size",
    type: "median_insert_size",
    class: "numerical"
  },
  { label: "Multiplier", type: "multiplier", class: "numerical" },
  { 
		label: "Neutral State MAD",
		type: "mad_neutral_state",
		class: "numerical" 
	},
  {
    label: "Paired Duplicate Reads",
    type: "paired_duplicate_reads",
    class: "numerical"
  },
  {
    label: "Paired Mapped Reads",
    type: "paired_mapped_reads",
    class: "numerical"
  },
  {
    label: "Percent Duplicate Reads",
    type: "percent_duplicate_reads",
    class: "numerical"
  },
  {
    label: "Percent Unmapped Reads",
    type: "percent_unmapped_reads",
    class: "numerical"
  },
  { label: "Quality", type: "quality", class: "numerical" },
  { label: "Row", type: "row" },
  { label: "Scaled Halfiness", type: "scaled_halfiness", class: "numerical" },
  {
    label: "Standard Deviation Insert Size",
    type: "standard_deviation_insert_size",
    class: "numerical"
  },
  { label: "State Mode", type: "state_mode", class: "categorical" },
  {
    label: "Total Duplicate Reads",
    type: "total_duplicate_reads",
    class: "numerical"
  },
  {
    label: "Total Halfiness",
    type: "total_halfiness",
    class: "numerical"
  },
  {
    label: "Total Mapped Reads",
    type: "total_mapped_reads",
    class: "numerical"
  },
  { label: "Unmapped Reads", type: "unmapped_reads", class: "numerical" },
  {
    label: "Total Properly Paired",
    type: "total_properly_paired",
    class: "numerical"
  },
  { label: "Total Reads", type: "total_reads", class: "numerical" },
  { label: "True Multiplier", type: "true_multiplier", class: "numerical" },
  {
    label: "TSS Enrichement Score",
    type: "tss_enrichment_score",
    class: "numerical"
  },
  {
    label: "Unpaired Duplicate Reads",
    type: "unpaired_duplicate_reads",
    class: "numerical"
  },
  {
    label: "Unpaired Mapped Reads",
    type: "unpaired_mapped_reads",
    class: "numerical"
  },
  {
    label: "Is Contaminated",
    type: "is_contaminated",
    class: "boolean"
  }
];
//  { type: "project", label: "Project" },
export const defaultDashboardColumns = [
  { type: "sample_id", label: "Sample ID" },
  { type: "library_id", label: "Library ID" },
  { type: "dashboard_id", label: "Dashboard ID" }
];
